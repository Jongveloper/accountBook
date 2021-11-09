import React from 'react';
// element
import { Button, Grid } from '../../elements';
// style
import { css } from 'styled-components'
import { TagListStyle } from './style';
//redux
import { useDispatch } from 'react-redux';
import { deleteTagDB } from '../../redux/modules/TagModule/tag';

interface Props {
  tagData: any
}

const TagList = (tag: Props): React.ReactElement => {
  const dispatch = useDispatch();
  const handleDelete = (id: number) => {
    dispatch(deleteTagDB(id))
  }
  return (
    <TagListStyle>
      {tag.tagData.map((tag: any, idx: number) => {
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