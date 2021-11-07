import React from 'react';
import { css } from 'styled-components'
import { Container, Grid } from '../../elements'
import Month from '../../components/Month';
import SelectBox from '../../components/SelectBox'
import AccountList from '../../components/AccountList';
const Home = (): React.ReactElement => {
  return (
    <Container padding='30px' height='100vh'>
      <Grid
        width='100%'
        margin='0px -43px'
        height='180px'
        z='5'
        bgColor='#F8F8F8'
        addstyle={() => {
          return css`
          position: fixed;
          `;
        }}>
        <Month />
      </Grid>
      <Grid
        margin='130px 0 0 0px'
        width='100%'
        height='80px'
        z='5'
        bgColor='#F8F8F8'
        addstyle={() => {
          return css`
          position: fixed;
          `;
        }}>
        <SelectBox />
      </Grid>
      <Grid margin='220px 0 0 0'>
        <AccountList />
      </Grid>
    </Container>
  )
}

export default Home;