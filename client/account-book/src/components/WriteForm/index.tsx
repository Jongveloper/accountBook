import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//style
import WriteFormStyle from './style';
import { css } from 'styled-components'
//elements
import { Input, Grid, Button } from '../../elements';
// mui
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
//redux
import { getTagDB } from '../../redux/modules/TagModule/tag';

const WriteForm = () => {
  const dispatch = useDispatch();
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
  // 태그 선택
  const tagState = useSelector((state) => state.tag.tag)
  const userState = useSelector((state) => state.user.user_info.username)
  const [Tag, setTag] = useState(tagState.tagName)
  const handleTagChange = (e: any) => {
    setTag(e.target.value)
  }
  useEffect(() => {
    dispatch(getTagDB(userState))
  }, [])

  return (
    <>
      <Grid textAlign='center' width='100%' margin='-20px auto 50px auto' height='auto'>
        <Box sx={{ minWidth: 120 }}>
          <FormControl>
            <InputLabel
              variant="standard"
              htmlFor="uncontrolled-native"
              sx={{ marginLeft: '20px' }}>
              Year
            </InputLabel>
            <NativeSelect
              value={Year}
              onChange={(e) => handleYearChange(e)}
              sx={{ marginRight: '20px', marginLeft: '20px' }}
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
          <Grid textAlign='center'>
            <FormControl
              style={{
                marginTop: '20px',
                width: '210px'
              }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                태그 선택
              </InputLabel>
              <NativeSelect
                value={Tag}
                onChange={(e) => handleTagChange(e)}
              >
                {tagState.map((tag: any) => <option key={tag.id} value={tag.tagName}>{tag.tagName}</option>)}
              </NativeSelect>
            </FormControl>
          </Grid>
        </Box>
      </Grid>
      <WriteFormStyle>
        <Grid
          textAlign='center'
          addstyle={() => {
            return css`
            justify-content: space-between;
            `;
          }}>
          <label style={{ fontWeight: 'bold', color: '#B6C8A5' }}>수입</label>
          <Input border='2px solid #B6C8A5' width='200px' margin='0 10px' height='40px' />
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
          <Input border='2px solid #B6C8A5' width='200px' margin='0 10px' height='40px' />
        </Grid>

        <Grid textAlign='center'>
          <Button
            border='none'
            width='80px'
            height='40px'
            margin='40px 0'
            color='white'>작성하기</Button>
        </Grid>
      </WriteFormStyle>
    </>
  )
}

export default WriteForm;