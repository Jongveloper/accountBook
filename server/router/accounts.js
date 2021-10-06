import express from 'express';
import 'express-async-errors';
import * as accountController from '../controller/accounts.js';

const router = express.Router();

router.get('/account', accountController.getAccounts);

router.post('/account', accountController.createAccount);

router.put('/account/:id', accountController.updateAccount);

router.delete('/account/:id', accountController.deleteAccount);
export default router;
