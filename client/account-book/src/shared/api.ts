import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { history } from '../redux/configureStore';

import { SignInType, SignUpType } from './ApiTypes';

import { getToken, delToken, setToken } from './token';
import { setUserInfo, delUserInfo } from './userInfo';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  timeout: 3000,
});

instance.interceptors.request.use((config) => {
  config.headers!['Content-Type'] = 'application/json; charset=utf-8';
  config.headers!['X-Requested-With'] = 'XMLHttpRequest';
  config.headers!.token = getToken()!;
  config.headers!.Accept = 'application/json';
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (err) => {
    const path = window.location.pathname;

    if (err.response.status === 307) {
      setToken(err.response.data.newAccessToken);
      setUserInfo('userInfo', jwtDecode(getToken()!));
      history.go(0);
    } else if (
      err.response.status === 401 &&
      !['/signup', '/signin'].includes(path)
    ) {
      window.alert('토큰이 만료되었어요! 다시 로그인해주세요!');
      delToken();
      delUserInfo('userInfo');
      history.push('/signin');
    }
    return Promise.reject(err);
  }
);

const apis = {
  SignUp: (user: SignUpType) => instance.post('/auth/signup', user),
  SignIn: (user: SignInType) => instance.post('/auth/login', user),
};

export default apis;