import React from 'react';
//style
import WriteFormStyle from './style';
import { css } from 'styled-components'
//elements
import { Input, Grid } from '../../elements';

const WriteForm = () => {
  return (
    <WriteFormStyle>
      <Grid
        textAlign='center'
        addstyle={() => {
          return css`
        justify-content: space-between;
        `;
        }}>
        <label style={{ fontWeight: 'bold', color: '#B6C8A5' }}>수입</label>
        <Input border='2px solid #B6C8A5' width='200px' margin='0 15px' height='40px' />
      </Grid>
      <Grid
        textAlign='center'
        margin='40px 0 0 0'
        addstyle={() => {
          return css`
        justify-content: space-between;
        `;
        }}>
        <label style={{ fontWeight: 'bold', color: '#B6C8A5' }}>내용</label>
        <Input border='2px solid #B6C8A5' width='200px' margin='0 15px' height='40px' />
      </Grid>
      <Grid
        textAlign='center'
        margin='40px 0 0 0'
        addstyle={() => {
          return css`
        justify-content: space-between;
        `;
        }}>
        <label style={{ fontWeight: 'bold', color: 'red' }}>지출</label>
        <Input border='2px solid #B6C8A5' width='200px' margin='0 15px' height='40px' />
      </Grid>
      <Grid
        textAlign='center'
        margin='40px 0 0 0'
        addstyle={() => {
          return css`
        justify-content: space-between;
        `;
        }}>
        <label style={{ fontWeight: 'bold', color: 'red' }}>내용</label>
        <Input border='2px solid #B6C8A5' width='200px' margin='0 15px' height='40px' />
      </Grid>
    </WriteFormStyle>
  )
}

export default WriteForm;