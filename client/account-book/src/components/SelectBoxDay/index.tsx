import React, { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Button } from '../../elements/index'


export default function SelectBoxDay() {
  const day = new Date()
  const year = [];
  const startYear = 2000;
  const endYear = day.getFullYear();
  for (let i = endYear; i >= startYear; i--) {
    year.push(i)
  }
  const month = [];
  const dateTime = [];
  for (let i = 1; i <= 12; i++) {
    month.push(i.toString().padStart(2, '0'));
  }
  for (let i = 1; i <= 31; i++) {
    dateTime.push(i.toString().padStart(2, '0'));
  }
  const [Year, setYear] = useState(day.getFullYear());
  const [Month, setMonth] = useState(day.getMonth() + 1);
  const [DateTime, setDateTime] = useState(day.getDate())
  const handleYearChange = (e: any) => {
    setYear(e.target.value)
  }
  const handleMonthChange = (e: any) => {
    setMonth(e.target.value)
  }
  const handleDateTimeChange = (e: any) => {
    setDateTime(e.target.value);
  }
  const getDate = useCallback(() => {
    const year = `${Year}`
    const month = `${Month}`
    const dateTime = `${DateTime}`
    console.log(`${year}-${month}-${dateTime}`)
  }, [Year, Month, DateTime])
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Year
        </InputLabel>
        <NativeSelect
          value={Year}
          onChange={(e) => handleYearChange(e)}
          sx={{ marginRight: '20px' }}
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
          sx={{ marginRight: '20px' }}
        >
          {month.map((i) => <option key={i} value={i}>{i}</option>)}
        </NativeSelect>
      </FormControl>
      <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Day
        </InputLabel>
        <NativeSelect
          value={DateTime}
          onChange={(e) => handleDateTimeChange(e)}
          sx={{ marginRight: '20px' }}
        >
          {dateTime.map((i) => <option key={i} value={i}>{i}</option>)}
        </NativeSelect>
      </FormControl>
      <Button border='none' color='white' width='60px' margin='5px 0' height='40px'
        _onClick={() => { getDate() }}>작성하기</Button>
    </Box>
  );
}