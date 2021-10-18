import jwtDecode from 'jwt-decode';
import { SignUpType } from './../../../shared/ApiTypes';
import { createSlice } from '@reduxjs/toolkit';
import apis from '../../../shared/api';
import { setToken, delToken } from '../../../shared/token';
import { setUserInfo } from '../../../shared/userInfo';
import { history } from '../../configureStore';
import { SignInType } from '../../../shared/ApiTypes';
import { useHistory } from 'react-router-dom';
const initialState = {
  user_info: { name: 'jong' },
  is_login: false,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logCheck: (state, action) => {
      state.is_login = true;
    },
    logOut: (state, action) => {
      delToken();
      state.is_login = false;
    },
  },
});

export const signUpDB = (user_info: SignUpType) => async () => {
  const user = {
    username: user_info.username,
    password: user_info.password,
    name: user_info.name,
  };
  try {
    await apis.SignUp(user);
    history.push('/');
  } catch (err) {
    window.alert(err);
  }
};

export const SignInDB = (userInfo: SignInType): void => {
  apis
    .SignIn(userInfo)
    .then(({ data }: any) => {
      setToken(data.token);
      setUserInfo('userInfo', jwtDecode(data.token));
      history.push('/home');
    })
    .catch((err) => {
      console.error(err);
      window.location.reload();
    });
};

export default user;
