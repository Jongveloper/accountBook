import React from 'react';
// element
import { Container, Grid } from '../../elements';
// img
import Money from '../../img/money-image.png'
// component
import WriteForm from '../../components/WriteForm'

const WriteAccount = (): React.ReactElement => {
  return (
    <Container padding='30px' height='50vh'>
      <Grid textAlign='center' >
        <img src={Money} width='300px' height='250px' alt='이미지' />
      </Grid>
      <Grid>
        <WriteForm />
      </Grid>
    </Container>
  )
}

export default WriteAccount;