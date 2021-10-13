import React from 'react';
import { Container, Grid } from '../../elements'
import Month from '../../components/Month';
import SelectBox from '../../components/SelectBox'
import AccountList from '../../components/AccountList';
const Home = (): React.ReactElement => {
  return (
    <Container padding='30px'>
      <Grid width='100%' margin='25px auto' height='auto' position='relative'>
        <Month />
      </Grid>
      <Grid margin='0 0 0 -65px'>
        <SelectBox />
      </Grid>
      <Grid margin='20px 0 0 0'>
        <AccountList />
      </Grid>
    </Container>
  )
}

export default Home;