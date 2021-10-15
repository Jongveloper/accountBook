import React from 'react';
import { Grid, Button, Input } from '../../elements';
import { TagFormStyle } from './style';
import { css } from 'styled-components';
const TagForm = () => {
  return (
    <Grid>
      <TagFormStyle>
        <label style={{ fontWeight: 800, color: '#B6C8A5', marginLeft: '-4px' }}>태그</label>
        <Input
          width='70%'
          height='40px'
          margin='20px 5px'
          border='5px solid #B6C8A5'
          placeholder='추가 할 태그를 입력해주세요' />
        <Button border='none' width='50px' height='40px' color='white'>작성</Button>
      </TagFormStyle>
    </Grid>
  )
}

export default TagForm;