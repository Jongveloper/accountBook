import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import apis, { instance } from '../../../shared/api';
import { getToken } from '../../../shared/token';
import type { RootState } from '../../configureStore';

const initialState = {
  account: [{}],
  expenditure: [{}],
  income: [{}],
  tag: [{}],
  statistics: [{}],
  calendar: [{}],
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addAccount: (state, action) => {
      const account = {
        income: action.payload.income,
        expenditure: action.payload.expenditure,
        year: action.payload.year,
        month: action.payload.month,
        day: action.payload.day,
        tag: action.payload.tag,
        color: action.payload.color,
      };
      state.account.push(account);
    },
    deleteAccount: (state, action: PayloadAction<number>) => {
      console.log('삭제');
    },
    getAccount: (state, action) => {
      state.account = action.payload;
    },
    getTotalMonthExpenditure: (state, action) => {
      const total = action.payload;
      state.expenditure.push(total);
      state.expenditure.shift();
    },
    getTotalMonthIncome: (state, action) => {
      const total = action.payload;
      state.income.push(total);
      state.income.shift();
    },
    getMonthAccount: (state, action) => {
      state.account = action.payload;
    },
    getMonthExTag: (state, action) => {
      state.tag = action.payload;
    },
    getStatistics: (state, action) => {
      state.statistics = action.payload;
    },
    getCalendar: (state, action) => {
      state.calendar = action.payload;
    },
  },
});

export const addAccountDB = (account: any) => {
  let token = getToken();
  return function (dispatch: any) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    apis
      .CreateAccount(account)
      .then((res) => {
        dispatch(addAccount);
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getMonthAccountDB = (
  username: string,
  month: number,
  year: number
) => {
  let token = getToken();
  return function (dispatch: any) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    apis.GetMonth(username, month, year).then((res) => {
      let account = res.data;
      dispatch(getMonthAccount(account));
    });
  };
};

export const getAccountDB = (username: string) => {
  let token = getToken();
  return function (dispatch: any) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    apis
      .GetAccount(username)
      .then((res) => {
        let account = res.data;
        dispatch(getAccount(account));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const deleteAccountDB = (id: number) => {
  return function (dispatch: any) {
    apis
      .DeleteAccount(id)
      .then((res) => {
        dispatch(deleteAccount);
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const GetTotalMonthExpenditureDB = (
  username: string,
  month: number,
  year: number
) => {
  let token = getToken();
  return function (dispatch: any) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    apis
      .GetTotalMonthExpenditure(username, month, year)
      .then((res: any) => {
        let expenditure = res.data.length === 0 ? 0 : res.data[0];
        dispatch(getTotalMonthExpenditure(expenditure));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const GetTotalMonthIncomeDB = (
  username: string,
  month: number,
  year: number
) => {
  let token = getToken();
  return function (dispatch: any) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    apis
      .GetTotalMonthIncome(username, month, year)
      .then((res: any) => {
        let income = res.data.length === 0 ? 0 : res.data[0];
        dispatch(getTotalMonthIncome(income));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getMonthExTagDB = (
  username: string,
  month: number,
  year: number
) => {
  let token = getToken();
  return function (dispatch: any) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    apis.GetMostExTag(username, month, year).then((res: any) => {
      let exTag = res.data;
      dispatch(getMonthExTag(exTag));
    });
  };
};

export const getStatisticsDB = (
  username: string,
  month: number,
  year: number
) => {
  let token = getToken();
  return function (dispatch: any) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    apis.GetStatistics(username, month, year).then((res: any) => {
      dispatch(getStatistics(res.data));
    });
  };
};
export const getCalendarDB = (username: string) => {
  let token = getToken();
  return function (dispatch: any) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    apis.GetCalendar(username).then((res: any) => {
      dispatch(getCalendar(res.data));
    });
  };
};

export const {
  addAccount,
  deleteAccount,
  getAccount,
  getTotalMonthExpenditure,
  getTotalMonthIncome,
  getMonthAccount,
  getMonthExTag,
  getStatistics,
  getCalendar,
} = accountSlice.actions;
export const selectAccount = (state: RootState) => state.account;
export default accountSlice.reducer;
