import React from 'react';
import { history } from '../../redux/configureStore';
import { css } from 'styled-components';
//package
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
//redux
import { SignInDB } from '../../redux/modules/UserModule/user';
//elements
import { Grid, Button, Input, Container } from '../../elements';
import Money from '../../img/money.png'
import { FormWrap } from './style';
const SignIn = (): React.ReactElement => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('아이디를 입력해주세요!'),
      password: Yup.string().required('패스워드를 입력해주세요!'),
    }),

    onSubmit: (values) => {
      dispatch(SignInDB(values))
    }
  })
  return (
    <Container padding='30px' height='100vh' addstyle={() => {
      return css`
        background-color: #B6C8A5;
        width: 100%;
        max-width: none;
      `;
    }}>
      <FormWrap>
        <form onSubmit={formik.handleSubmit}>
          <Grid height='300px' textAlign='center' >
            <h1
              style={{ marginTop: '30px', fontSize: '33px', fontWeight: 'bold', color: 'white' }}
            >알뜰 살뜰 가계부</h1>
            <Grid margin='auto'>
              <img
                src={Money}
                width='250px'
                height='250px'
                alt='메인이미지'
                style={{ marginTop: '20px' }}
              />
            </Grid>
            <Grid margin='auto' width='70%'>
              <Input
                border='none'
                margin='20px auto'
                placeholder='아이디를 입력하세요'
                padding='16px'
                name='username'
                type='username'
                _onChange={formik.handleChange}
                value={formik.values.username} />
              <Input
                border='none'
                placeholder='비밀번호를 입력하세요'
                padding='16px'
                margin='2px auto'
                name='password'
                type='password'
                value={formik.values.password}
                _onChange={formik.handleChange}
              />
            </Grid>
            <Button
              type='submit'
              bgColor='black'
              color='white'
              border='none'
              width='70px'
              height='50px'
              margin='20px 30px 0 0'
            >로그인</Button>
            <Button
              bgColor='black'
              color='white'
              border='none'
              width='70px'
              height='50px'
              margin='20px 0 0 0'
              _onClick={() => { history.push('/signup') }}>회원가입</Button>
          </Grid>
        </form>
      </FormWrap>
    </Container>
  )
}

export default SignIn