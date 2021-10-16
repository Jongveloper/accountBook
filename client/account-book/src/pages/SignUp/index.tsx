import React from 'react'
import { Grid, Container } from '../../elements'
import SignUpForm from '../../components/SignUpForm';

const SignUp = (): React.ReactElement => {
  return (
    <Container>
      <Grid margin='130px auto' textAlign='center'>
        <SignUpForm />
      </Grid>
    </Container>
  )
}

export default SignUp;