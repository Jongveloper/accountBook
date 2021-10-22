import React, { useState, useCallback } from 'react';
import { css } from 'styled-components'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Button, Grid } from '../../elements/index'


export default function SelectBox() {
  const day = new Date()
  const year = [];
  const startYear = 2000;
  const endYear = day.getFullYear();
  for (let i = endYear; i >= startYear; i--) {
    year.push(i)
  }
  const month = [];

  for (let i = 1; i <= 12; i++) {
    month.push(i.toString().padStart(2, '0'));
  }

  const [Year, setYear] = useState(day.getFullYear());
  const [Month, setMonth] = useState(day.getMonth() + 1);

  const handleYearChange = (e: any) => {
    setYear(e.target.value)
  }
  const handleMonthChange = (e: any) => {
    setMonth(e.target.value)
  }
  const getDate = useCallback(() => {
    const year = `${Year}`
    const month = `${Month}`
    console.log(`${year}-${month}`)
  }, [Year, Month])
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Year
        </InputLabel>
        <NativeSelect
          value={Year}
          onChange={(e) => handleYearChange(e)}
          sx={{ marginRight: '5px' }}
        >
          {year.map((i) => <option key={i} value={i}>{i}</option>)}
        </NativeSelect>
      </FormControl>
      <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Month
        </InputLabel>
        <NativeSelect
          value={Month}
          onChange={(e) => handleMonthChange(e)}
        >
          {month.map((i) => <option key={i} value={i}>{i}</option>)}
        </NativeSelect>
      </FormControl>
      <Button border='none' color='white' width='80px' margin='0 7px' height='45px'
        _onClick={() => { getDate() }}>조회</Button>
      <Grid
        isFlex
        addstyle={() => {
          return css`
          justify-content: flex-end;
          `
        }}>
        <p style={{ fontSize: '14px', fontWeight: 900, color: 'gray', margin: '-40px 15px' }}>{Year}년 {Month}월</p>
      </Grid>
      <Grid
        isFlex
        addstyle={() => {
          return css`
          justify-content: flex-end;
          `
        }}>
        <p style={{ fontSize: '14px', fontWeight: 900, color: '#B6C8A5', margin: '-25px 5px' }}>총 수입: 10000</p>
      </Grid>
      <Grid
        isFlex
        addstyle={() => {
          return css`
          justify-content: flex-end;
          `
        }}>
        <p style={{ fontSize: '14px', fontWeight: 900, color: 'red', margin: '-10px 5px' }}>총 지출: 10000</p>
      </Grid>
    </Box>
  );
}