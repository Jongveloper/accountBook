import React from 'react'
import { Grid, Container } from '../../elements'
import SignUpForm from '../../components/SignUpForm';
import { css } from 'styled-components'
const SignUp = (): React.ReactElement => {
  return (
    <Container addstyle={() => {
      return css`
      z-index: 4;
      `;
    }}>
      <Grid margin='130px auto' textAlign='center'>
        <SignUpForm />
      </Grid>
    </Container>
  )
}

export default SignUp;