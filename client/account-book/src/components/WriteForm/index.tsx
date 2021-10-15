import React from 'react';
//style
import WriteFormStyle from './style';
import { css } from 'styled-components'
//elements
import { Input, Grid } from '../../elements';

const WriteForm = () => {
  return (
    <WriteFormStyle>
      <Grid addstyle={() => {
        return css`
        justify-content: space-between;
        `;
      }}>
        <label style={{ fontWeight: 'bold', color: '#B6C8A5' }}>수입</label>
        <Input border='1px solid black' width='200px' margin='0 15px' height='40px' />
      </Grid>
      <Grid
        margin='40px 0 0 0'
        addstyle={() => {
          return css`
        justify-content: space-between;
        `;
        }}>
        <label style={{ fontWeight: 'bold', color: '#B6C8A5' }}>내용</label>
        <Input border='1px solid black' width='200px' margin='0 15px' height='40px' />
      </Grid>
      <Grid
        margin='40px 0 0 0'
        addstyle={() => {
          return css`
        justify-content: space-between;
        `;
        }}>
        <label style={{ fontWeight: 'bold', color: 'red' }}>지출</label>
        <Input border='1px solid black' width='200px' margin='0 15px' height='40px' />
      </Grid>
      <Grid
        margin='40px 0 0 0'
        addstyle={() => {
          return css`
        justify-content: space-between;
        `;
        }}>
        <label style={{ fontWeight: 'bold', color: 'red' }}>내용</label>
        <Input border='1px solid black' width='200px' margin='0 15px' height='40px' />
      </Grid>
    </WriteFormStyle>
  )
}

export default WriteForm;