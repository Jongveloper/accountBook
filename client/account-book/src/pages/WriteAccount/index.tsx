import React from 'react';
import { css } from 'styled-components'
import { Container, Grid } from '../../elements';
import SelectBoxDay from '../../components/SelectBoxDay';
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
      <Grid>
        <img src={Money} width='300px' height='250px' alt='이미지' />
      </Grid>
      <Grid textAlign='center' width='100%' margin='0px auto 50px auto' height='auto' position='relative'>
        <SelectBoxDay />
      </Grid>
      <Grid>
        <WriteForm />
      </Grid>
    </Container>
  )
}

export default WriteAccount;