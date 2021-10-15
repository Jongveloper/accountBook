import React from 'react';
import { Container, Grid } from '../../elements';
import TagForm from '../../components/TagForm';
import TagList from '../../components/TagList';
const Info = (): React.ReactElement => {
  return (
    <Container padding='30px'>
      <Grid width='100%' margin='20px auto'>
        <TagForm />
      </Grid>
      <Grid margin='auto'>
        <TagList />
      </Grid>
    </Container>
  )
}


export default Info;