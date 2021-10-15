import React from 'react';
import { useLocation } from 'react-router';
import MonthStyle from './style';
import { Grid } from '../../elements';
const Month = () => {
  const path: string = useLocation().pathname

  return path.includes('/home') ? (
    <MonthStyle>
      <h1 style={{ marginTop: '40px' }}>1월</h1>
    </MonthStyle>
  ) :
    <Grid>
      <MonthStyle>
        <h1 style={{ color: 'black', fontWeight: 700, marginTop: '20px', fontSize: '14px', minHeight: '35px' }}>가장 많은 지출</h1>
        <p style={{ color: 'red' }}>식품</p>
      </MonthStyle>
    </Grid>
}

export default Month;