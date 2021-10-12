import React from 'react';
import { css } from 'styled-components';
//elements
import { Grid, Button, Input, Container } from '../../elements';
import Money from '../../img/money.png'
const SignIn = (): React.ReactElement => {
  return (
    <Container padding='30px' addstyle={() => {
      return css`
        background-color: #B6C8A5;
      `;
    }}>
      <Grid height='300px' position='relative' >
        <h1 style={{ marginTop: '60px', fontSize: '45px', fontWeight: 'bold', color: 'white' }}>알뜰 살뜰 가계부</h1>
        <img src={Money} width='300px' height='300px' alt='메인이미지'
          style={{ marginTop: '60px' }}
        />
        <Input border='none' margin='30px auto' placeholder='아이디를 입력하세요' padding='16px' />
        <Input border='none' placeholder='비밀번호를 입력하세요' padding='16px' margin='2px auto' />
        <Button bgColor='black' color='white' border='none' width='70px' height='50px' margin='40px 30px 0 0'>로그인</Button>
        <Button bgColor='black' color='white' border='none' width='70px' height='50px' margin='40px 0 0 0'>회원가입</Button>
      </Grid>
    </Container>
  )
}

export default SignIn