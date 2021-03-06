// Api Types
import { SignInType, SignUpType, TagType, AccountType } from './ApiTypes';
// Info
import { setUserInfo, delUserInfo } from './userInfo';
// redux
import { history } from '../redux/configureStore';
// axios
import axios from 'axios';
// jwt / token
import { getToken, delToken, setToken } from './token';
import jwtDecode from 'jwt-decode';
export const instance = axios.create({
  baseURL: ' https://account-ac.herokuapp.com/',
  withCredentials: true,
  timeout: 3000,
});

instance.interceptors.request.use((config) => {
  config.headers!['Content-Type'] = 'application/json; charset=utf-8';
  config.headers!['X-Requested-With'] = 'XMLHttpRequest';
  config.headers!.token = getToken();
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
      !['/signup', '/'].includes(path)
    ) {
      window.alert('토큰이 만료되었어요! 다시 로그인해주세요!');
      delToken();
      delUserInfo('userInfo');
      history.push('/');
    }
    return Promise.reject(err);
  }
);

const apis = {
  SignUp: (user: SignUpType) => instance.post('/auth/signup', user),
  SignIn: (user: SignInType) => instance.post('/auth/login', user),
  CreateTag: (tag: TagType) => instance.post('/tag', tag),
  GetTag: (username: string) => instance.get(`/tag?username=${username}`),
  DeleteTag: (id: number) => instance.delete(`/tag/${id}`),
  GetAccount: (username: string) =>
    instance.get(`/account?username=${username}`),
  CreateAccount: (account: AccountType) => instance.post('/account', account),
  DeleteAccount: (id: number) => instance.delete(`/account/${id}`),
  GetTotalMonthExpenditure: (username: string, month: number, year: number) =>
    instance.get(
      `/account/total/?username=${username}&year=${year}&month=${month}`
    ),
  GetTotalMonthIncome: (username: string, month: number, year: any) =>
    instance.get(
      `/account/totalin/?username=${username}&year=${year}&month=${month}`
    ),
  GetMonth: (username: string, month: number, year: number) =>
    instance.get(
      `/account/month/?username=${username}&year=${year}&month=${month}`
    ),
  GetMostExTag: (username: string, month: number, year: number) =>
    instance.get(
      `/account/most/?username=${username}&year=${year}&month=${month}`
    ),
  GetStatistics: (username: string, month: number, year: number) =>
    instance.get(
      `/account/statistics/?username=${username}&year=${year}&month=${month}`
    ),
  GetCalendar: (username: string) =>
    instance.get(`/account/calendar/?username=${username}`),
};

export default apis;
