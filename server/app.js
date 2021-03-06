import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
import accountRouter from './router/accounts.js';
import authRouter from './router/auth.js';
import tagRouter from './router/tag.js';
import { config } from './config.js';
import { sequelize } from './db/database.js';

const app = express();

const corsOption = {
  origin: config.cors.allowedOrigin,
  optionSuccessStatus: 200,
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOption));
app.use(helmet());
app.use(morgan('tiny'));

app.use('/', accountRouter);
app.use('/auth', authRouter);
app.use('/tag', tagRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

sequelize.sync().then(() => {
  console.log(`${new Date()} 서버 시작`);
  app.listen(config.port, () => {
    console.log(`${config.port}`);
  });
});
