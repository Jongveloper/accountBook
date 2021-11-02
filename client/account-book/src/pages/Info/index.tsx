import React from 'react';
import { Container, Grid } from '../../elements';
import TagForm from '../../components/TagForm';
import TagList from '../../components/TagList';
import Month from '../../components/Month';
import Money from '../../img/money-image.png'
import { css } from 'styled-components'
const Info = (): React.ReactElement => {
  return (
    <Container padding='30px' height='50vh' addstyle={() => {
      return css`
      z-index: 4;
      `;
    }}>
      <Grid textAlign='center' height='140px'>
        <img src={Money} width='250px' height='250px' alt='메인이미지'
          style={{ marginTop: '-50px' }} />
      </Grid>
      <Grid width='100%' margin='0 auto' z='4'>
        <TagForm />
      </Grid>
      <Grid margin='auto'>
        <TagList />
      </Grid>
      <Grid margin='20px auto'>
        <Month />
      </Grid>
    </Container>
  )
}


export default Info;