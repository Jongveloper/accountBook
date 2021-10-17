import { createSlice } from '@reduxjs/toolkit';
import apis from '../../../shared/api';
import { setToken, delToken } from '../../../shared/token';
import { history } from '../../configureStore';
const initialState = {
  user_info: { name: 'jong' },
  is_login: false,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SetUser: (state, action) => {
      state.user_info.name = action.payload.name;
      setToken(action.payload.token);
      state.is_login = true;
    },
    logCheck: (state, action) => {
      state.is_login = true;
    },
    logOut: (state, action) => {
      delToken();
      state.is_login = false;
    },
  },
});

export const signUpDB = (user_info: any) => async () => {
  const user = {
    username: user_info.username,
    password: user_info.password,
    name: user_info.name,
  };
  try {
    await apis.SignUp(user);
    history.push('/login');
  } catch (err) {
    window.alert(err);
  }
};
