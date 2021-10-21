import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import apis, { instance } from '../../../shared/api';
import { getToken } from '../../../shared/token';
import type { RootState } from '../../configureStore';

const initialState = {
  account: [{}],
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
      };
      state.account.push(account);
    },
    deleteAccount: (state, action: PayloadAction<number>) => {
      console.log('삭제');
    },
    getAccount: (state, action) => {
      state.account = action.payload;
    },
  },
});

export const addAccountDB = (account: any) => {
  console.log(account);
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

export const { addAccount, deleteAccount, getAccount } = accountSlice.actions;
export const selectAccount = (state: RootState) => state.account;
export default accountSlice.reducer;
