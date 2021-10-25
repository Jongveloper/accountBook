import React, { useState, useCallback, useEffect } from 'react';
//redux
import {
  getMonthAccountDB,
  GetTotalMonthExpenditureDB,
  GetTotalMonthIncomeDB
}
  from '../../redux/modules/AccountModule/account';
import { useDispatch, useSelector } from 'react-redux';
//style
import { css } from 'styled-components'

// mui
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Button, Grid } from '../../elements/index'


export default function SelectBox() {
  const dispatch = useDispatch();
  // 날짜
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

  const userState = useSelector((state) => state.user.user_info.username)
  const getDate = useCallback(() => {
    dispatch(GetTotalMonthIncomeDB(userState, Month, Year))
    dispatch(GetTotalMonthExpenditureDB(userState, Month, Year))
    dispatch(getMonthAccountDB(userState, Month, Year))
  }, [dispatch, userState, Month, Year])



  // 총 수입
  const incomeState = useSelector((state) => state.account.income)
  // let totalIncome = incomeState.map((item: any) => item)
  let totalIncome = incomeState[0]


  useEffect(() => {
    dispatch(GetTotalMonthIncomeDB(userState, day.getMonth() + 1, day.getFullYear()))
  }, [])


  // 총 지출
  const expenditureState = useSelector((state) => state.account.expenditure)
  let totalExpenditure = expenditureState[0]


  useEffect(() => {
    dispatch(GetTotalMonthExpenditureDB(userState, day.getMonth() + 1, day.getFullYear()))
  }, [])

  const accountState = useSelector((state) => state.account.account)
  console.log(accountState)



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
          {year.map((i) => <option key={i + Math.floor(Math.random())} value={i}>{i}</option>)}
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
          {month.map((i) => <option key={i + Math.floor(Math.random())} value={i}>{i}</option>)}
        </NativeSelect>
      </FormControl>
      <Button
        border='none'
        color='white'
        width='80px'
        margin='0 7px'
        height='45px'
        _onClick={() => { getDate() }}>조회</Button>
      <Grid
        isFlex
        addstyle={() => {
          return css`
          justify-content: flex-end;
          `
        }}>
        <p style={{ fontSize: '14px', fontWeight: 900, color: 'gray', margin: '-40px 0px', zIndex: -4 }}>{Year}년 {Month}월</p>
      </Grid>
      <Grid
        isFlex
        addstyle={() => {
          return css`
          justify-content: flex-end;
          `
        }}>
        <p style={{ fontSize: '14px', fontWeight: 900, color: '#B6C8A5', margin: '-25px 0px' }}>총 수입: ${totalIncome.totalIncome ? totalIncome.totalIncome : 0}</p>
      </Grid>
      <Grid
        isFlex
        addstyle={() => {
          return css`
          justify-content: flex-end;
          `
        }}>
        <p style={{ fontSize: '14px', fontWeight: 900, color: 'red', margin: '-10px 0px' }}>총 지출: ${totalExpenditure.total ? totalExpenditure.total : 0}</p>
      </Grid>
    </Box>
  );
}