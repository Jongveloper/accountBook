import React from 'react';
import { Container, Grid } from '../../elements';
import Chart from '../../components/Chart';

const Statistics = (): React.ReactElement => {
  return (
    <Container padding='30px'>
      <Grid margin='50px 0 0 0'>
        <Chart />
      </Grid>
    </Container >
  )
}

export default Statistics;