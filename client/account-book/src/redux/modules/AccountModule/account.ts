import { createSlice } from '@reduxjs/toolkit';
import apis, { instance } from '../../../shared/api';
import { getToken } from '../../../shared/token';
import type { RootState } from '../../configureStore';

const initialState = {
  account: [{ id: 0 }],
  expenditure: [{}],
  income: [{}],
  tag: [{ tagName: '태그를 선택해주세요!' }],
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
        id: action.payload.id,
      };
      state.account.push(account);
    },
    deleteAccount: (state, action) => {
      let idx = state.account.findIndex((r) => r.id === action.payload);
      if (idx !== -1) {
        state.account.splice(idx, 1);
      }
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
        window.alert(
          '글 작성에 오류가 생겼어요! 잠시후 다시 시도 부탁드립니다.'
        );
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
        window.alert('오류가 발생했어요! 잠시후 다시 시도 부탁드립니다.');
      });
  };
};

export const deleteAccountDB = (id: number) => {
  return function (dispatch: any) {
    apis
      .DeleteAccount(id)
      .then((res) => {
        dispatch(deleteAccount(id));
      })
      .catch((err) => {
        window.alert(
          '글 삭제에 오류가 생겼어요! 잠시후 다시 시도 부탁드립니다.'
        );
      });
  };
};

export const getTotalMonthExpenditureDB = (
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
        window.alert('오류가 생겼어요! 잠시후 다시 시도 부탁드립니다.');
      });
  };
};

export const getTotalMonthIncomeDB = (
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
        window.alert('오류가 생겼어요! 잠시후 다시 시도 부탁드립니다.');
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
