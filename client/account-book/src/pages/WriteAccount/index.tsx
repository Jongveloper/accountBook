import React from 'react';
import { Container, Grid } from '../../elements';
import SelectBoxDay from '../../components/SelectBoxDay';

const WriteAccount = (): React.ReactElement => {
  return (
    <Container padding='30px'>
      <Grid width='100%' margin='50px auto' height='auto' position='relative'>
        <SelectBoxDay />
      </Grid>
      <Grid>

      </Grid>
    </Container>
  )
}

export default WriteAccount;