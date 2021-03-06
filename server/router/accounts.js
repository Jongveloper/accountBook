import express from 'express';
import 'express-async-errors';
import * as accountController from '../controller/accounts.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/account', isAuth, accountController.getAccounts);
router.post('/account', isAuth, accountController.createAccount);
router.put('/account/:id', isAuth, accountController.updateAccount);
router.delete('/account/:id', isAuth, accountController.deleteAccount);
router.get('/account/cal', isAuth, accountController.getMonthAccount);
router.get(
  '/account/total',
  isAuth,
  accountController.getTotalMonthExpenditureAccount
);
router.get(
  '/account/totalin',
  isAuth,
  accountController.getTotalMonthIncomeAccount
);
router.get('/account/most', isAuth, accountController.getMostMonthExTag);
router.get('/account/month', isAuth, accountController.getMonthAccount);
router.get(
  '/account/statistics',
  isAuth,
  accountController.getStatisticsDataAccount
);
router.get('/account/calendar', accountController.getCalendarDataAccount);
export default router;
