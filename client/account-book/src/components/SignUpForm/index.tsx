import React from 'react';
//style
import SignUpFormStyle from './style';
import { css } from 'styled-components'
//elements
import { Input, Grid, Button } from '../../elements';

const SignUpForm = () => {
  return (
    <SignUpFormStyle>
      <Grid>
        <h1 style={{ color: '#B6C8A5', fontWeight: 800, fontSize: '40px' }}>회원가입</h1>
      </Grid>
      <Grid
        margin='100px 0 0 0'
        textAlign='center'
      >
        <Input
          border='2px solid#B6C8A5'
          width='240px'
          margin='0 15px'
          height='40px'
          placeholder='사용하실 아이디를 입력해주세요.' />
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
          placeholder='사용하실 닉네임을 입력해주세요.' />
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
          placeholder='비밀번호를 입력해주세요.' />
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
          placeholder='비밀번호를 한번 더 입력해주세요.' />
      </Grid>
      <Grid margin='40px 0 0 0'>
        <Button border='none' width='120px' height='50px' color='white'>등록</Button>
      </Grid>
    </SignUpFormStyle>
  )
}

export default SignUpForm;