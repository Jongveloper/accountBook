import React, { useEffect } from 'react';
import { Container, Grid } from '../../elements';
import TagForm from '../../components/TagForm';
import TagList from '../../components/TagList';
import Month from '../../components/Month';
import Money from '../../img/money-image.png'
import { css } from 'styled-components'
import { ImageWrapper, MonthWrapper } from './style';
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
    <Container padding='30px' height='auto' addstyle={() => {
      return css`
      z-index: 2;
      `;
    }}>
      <ImageWrapper>
        <img src={Money} width='250px' height='250px' alt='메인이미지'
          style={{ marginTop: '-50px', zIndex: 1 }} />
      </ImageWrapper>
      <Grid width='100%' margin='0 auto' z='4'>
        <TagForm />
      </Grid>
      <Grid margin='auto'>
        <TagList tagData={tagState} />
      </Grid>
      <MonthWrapper>
        <Month />
      </MonthWrapper>
    </Container>
  )
}


export default Info;