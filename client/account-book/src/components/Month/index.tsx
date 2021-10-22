import React from 'react';
import { useLocation } from 'react-router';
import MonthStyle from './style';
import { Grid } from '../../elements';
const Month = () => {
  const dt = new Date()
  const path: string = useLocation().pathname
  const today = dt.getFullYear() + '년' + (dt.getMonth() + 1) + '월' + dt.getDate() + '일';

  return path.includes('/home') ? (
    <MonthStyle>
      <h1 style={{ marginTop: '40px' }}>{today}</h1>
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