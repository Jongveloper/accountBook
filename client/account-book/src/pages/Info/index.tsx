import React from 'react';
import { Container, Grid } from '../../elements';
import TagForm from '../../components/TagForm';

const Info = (): React.ReactElement => {
  return (
    <Container padding='20px'>
      <Grid width='100%' margin='30px auto'>
        <TagForm />
      </Grid>
    </Container>
  )
}


export default Info;