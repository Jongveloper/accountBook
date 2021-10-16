import React from 'react';
import { css } from 'styled-components'
import { Container, Grid } from '../../elements';
import WriteForm from '../../components/WriteForm'
// image
import Money from '../../img/money-image.png'
const WriteAccount = (): React.ReactElement => {
  return (
    <Container padding='30px' addstyle={() => {
      return css`
      position: fixed;
      `;
    }}>
      <Grid textAlign='center'>
        <img src={Money} width='300px' height='250px' alt='이미지' />
      </Grid>
      <Grid>
        <WriteForm />
      </Grid>
    </Container>
  )
}

export default WriteAccount;