import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TagListStyle } from './style';

//redux
import { getTagDB, deleteTagDB } from '../../redux/modules/TagModule/tag';
import { Button, Grid } from '../../elements';

import { css } from 'styled-components'
const TagList = (): React.ReactElement => {
  const dispatch = useDispatch();
  const tagState = useSelector((state) => state.tag.tag)
  const userState = useSelector((state) => state.user.user_info.username)

  const handleDelete = (id: number) => {
    dispatch(deleteTagDB(id))
  }
  useEffect(() => {
    dispatch(getTagDB(userState))
  }, [dispatch, userState])
  return (
    <TagListStyle>
      {tagState.map((tag: any, idx: number) => {
        return (
          <div key={idx + Math.random()}>
            <Grid
              isFlex
              addstyle={() => {
                return css`
                justify-content: space-between;
              `;
              }}
            >
              <li
                style={{
                  fontWeight: 900,
                  color: tag.color,
                  lineHeight: 2.5
                }}
                key={tag.id + idx}>{tag.tagName}</li>
              <Button
                border='none'
                width='25px'
                height='25px'
                radius='5px'
                margin='5px 0'
                color='white'
                _onClick={() => { handleDelete(tag.id) }}
              >x</Button>
            </Grid>
          </div>)
      })}
    </TagListStyle>
  )
}

export default TagList