import React from 'react'
// element
import { Grid, Container } from '../../elements'
// style
import { css } from 'styled-components'
// component
import SignUpForm from '../../components/SignUpForm';

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