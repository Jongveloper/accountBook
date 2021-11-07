import React, { useEffect } from 'react';
import { Container, Grid } from '../../elements';
import TagForm from '../../components/TagForm';
import TagList from '../../components/TagList';
import Month from '../../components/Month';
import Money from '../../img/money-image.png'
import { css } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { getTagDB } from '../../redux/modules/TagModule/tag';
const Info = (): React.ReactElement => {
  const dispatch = useDispatch();
  const tagState = useSelector((state) => state.tag.tag)
  const userState = useSelector((state) => state.user.user_info.username)
  useEffect(() => {
    dispatch(getTagDB(userState))
  }, [dispatch, userState])
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
        <TagList tagData={tagState} />
      </Grid>
      <Grid margin='20px auto'>
        <Month />
      </Grid>
    </Container>
  )
}


export default Info;