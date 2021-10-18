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
    <Container padding='30px' addstyle={() => {
      return css`
        background-color: #B6C8A5;
      `;
    }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid height='300px' textAlign='center' >
          <h1
            style={{ marginTop: '60px', fontSize: '45px', fontWeight: 'bold', color: 'white' }}
          >알뜰 살뜰 가계부</h1>
          <img
            src={Money}
            width='300px'
            height='300px'
            alt='메인이미지'
            style={{ marginTop: '60px' }}
          />
          <Input
            border='none'
            margin='30px auto'
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
          <Button
            type='submit'
            bgColor='black'
            color='white'
            border='none'
            width='70px'
            height='50px'
            margin='40px 30px 0 0'
          >로그인</Button>
          <Button
            bgColor='black'
            color='white'
            border='none'
            width='70px'
            height='50px'
            margin='40px 0 0 0'
            _onClick={() => { history.push('/signup') }}>회원가입</Button>
        </Grid>
      </form>
    </Container>
  )
}

export default SignIn