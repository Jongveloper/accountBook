import React from 'react';
import { Container, Grid } from '../../elements';
import WriteForm from '../../components/WriteForm'
// image
import Money from '../../img/money-image.png'
const WriteAccount = (): React.ReactElement => {
  return (
    <Container padding='30px' height='50vh'>
      <Grid textAlign='center' >
        <img src={Money} width='300px' height='250px' alt='이미지' />
      </Grid>
      <Grid z='5'>
        <WriteForm />
      </Grid>
    </Container>
  )
}

export default WriteAccount;