import React from 'react';
//style
import SignUpFormStyle from './style';
//elements
import { Input, Grid, Button } from '../../elements';
//package
import * as Yup from 'yup';
import { useFormik } from 'formik';
//redux
import { useDispatch } from 'react-redux';
import { signUpDB } from '../../redux/modules/UserModule/user';

const SignUpForm = (): React.ReactElement => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      name: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, '아이디는 4자리 이상이어야 합니다.')
        .required('아이디를 입력해주세요'),
      password: Yup.string()
        .min(4, '비밀번호는 4자리 이상이어야합니다.')
        .required('비밀번호를 입력해주세요.'),
      name: Yup.string()
        .required('닉네임을 입력해주세요')
    }),
    onSubmit: (values) => {
      dispatch(signUpDB(values))
    }
  })
  return (
    <SignUpFormStyle onSubmit={formik.handleSubmit}>
      <Grid>
        <h1 style={{ color: '#B6C8A5', fontWeight: 800, fontSize: '40px' }}>회원가입</h1>
      </Grid>
      <Grid
        margin='50px 0 0 0'
        textAlign='center'
      >
        <Input
          border='2px solid#B6C8A5'
          width='240px'
          margin='0 15px'
          name='username'
          type='username'
          height='40px'
          _onChange={formik.handleChange}
          value={formik.values.username}
          placeholder='사용하실 아이디를 입력해주세요.'
        />
        {formik.errors.username && formik.touched.username && (
          <p style={{ marginTop: '20px', color: 'red', fontWeight: 700 }}>{formik.errors.username}</p>
        )}
      </Grid>
      <Grid
        textAlign='center'
        margin='40px 0 0 0'
      >
        <Input
          border='2px solid #B6C8A5'
          width='240px'
          margin='0 15px'
          height='40px'
          name='name'
          type='name'
          value={formik.values.name}
          _onChange={formik.handleChange}
          placeholder='사용하실 닉네임을 입력해주세요.'
        />
        {formik.errors.name && formik.touched.name && (
          <p style={{ marginTop: '20px', color: 'red', fontWeight: 700 }}>{formik.errors.name}</p>
        )}
      </Grid>
      <Grid
        textAlign='center'
        margin='40px 0 0 0'
      >
        <Input
          border='2px solid #B6C8A5'
          width='240px'
          margin='0 15px'
          type='password'
          name='password'
          value={formik.values.password}
          _onChange={formik.handleChange}
          height='40px'
          placeholder='비밀번호를 입력해주세요.'
        />
        {formik.errors.password && formik.touched.password && (
          <p style={{ marginTop: '20px', color: 'red', fontWeight: 700 }}>{formik.errors.password}</p>
        )}
      </Grid>
      <Grid margin='40px 0 0 0'>
        <Button type='submit' border='none' width='120px' height='50px' color='white'>등록</Button>
      </Grid>
    </SignUpFormStyle>
  )
}

export default SignUpForm;