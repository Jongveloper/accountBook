import React, { useState, useEffect } from 'react';
//style
import { css } from 'styled-components'
import WriteFormStyle from './style';
//elements
import { Input, Grid, Button } from '../../elements';
// mui
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getTagDB } from '../../redux/modules/TagModule/tag';
import { addAccountDB } from '../../redux/modules/AccountModule/account';

const WriteForm = (): React.ReactElement => {
  const dispatch = useDispatch();
  // 날짜 입력
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

  // 태그 선택
  const tagState = useSelector((state) => state.tag.tag)
  const userState = useSelector((state) => state.user.user_info.username)
  const randomColor =
    ['#003f5c', '#58508d',
      '#bc5090', '#ff6361',
      '#ffa600', '#ff7c43',
      '#f95d6a', '#d45087',]
  const [Tag, setTag] = useState(tagState[0] ? tagState[0].tagName : '')
  const handleTagChange = (e: any) => {
    setTag(e.target.value)
  }

  useEffect(() => {
    dispatch(getTagDB(userState))
  }, [dispatch, userState])
  // 수입, 지출, 내용
  const [income, setIncome] = useState('')
  const [expenditure, setExpenditure] = useState('')
  const [contents, setContents] = useState('')

  // 콤마
  const inputPrice = (num: any) => {
    const comma = (num: any) => {
      num = String(num);
      return num.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (num: any) => {
      num = String(num);
      return num.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(num));
  };

  const handleIncomeChange = (e: any) => {
    setIncome(inputPrice(e.target.value))
  }
  const handleExpenditureChange = (e: any) => {
    setExpenditure(inputPrice(e.target.value))
  }
  const handleContentsChange = (e: any) => {
    setContents(e.target.value)
  }

  // 날짜, 태그, 수입, 지출
  const account = {
    income: income === '' ? 0 : parseInt(income.replace(/,/g, "")),
    expenditure: expenditure === '' ? 0 : parseInt(expenditure.replace(/,/g, "")),
    tag: `${Tag}`,
    year: parseInt(`${Year}`),
    month: parseInt(`${Month}`),
    day: parseInt(`${DateTime}`),
    contents,
    color: randomColor[Math.floor(Math.random() * 8)]
  }
  // Account 추가 이벤트
  const handleAddAccount = () => {
    if (account.contents === '') {
      alert('내용을 입력해주세요!')
      return
    }
    dispatch(addAccountDB(account))
    setIncome('')
    setExpenditure('')
    setContents('')
    alert('작성이 완료되었습니다!')
  }
  return (
    <>
      <Grid
        textAlign='center' width='100%'
        margin='-20px auto 50px auto'
        height='auto'>
        <Box sx={{ minWidth: 120, zIndex: 4 }}>
          <FormControl>
            <InputLabel
              variant="standard"
              htmlFor="uncontrolled-native"
              sx={{ marginLeft: '5px' }}>
              Year
            </InputLabel>
            <NativeSelect
              value={Year}
              onChange={(e) => handleYearChange(e)}
              sx={{ marginRight: '5px', marginLeft: '10px', zIndex: 4 }}
            >
              {year.map((i) => <option key={i} value={i}>{i}</option>)}
            </NativeSelect>
          </FormControl>
          <FormControl>
            <InputLabel
              variant="standard"
              htmlFor="uncontrolled-native">
              Month
            </InputLabel>
            <NativeSelect
              value={Month.toString().padStart(2, '0')}
              onChange={(e) => handleMonthChange(e)}
              sx={{ marginRight: '10px', zIndex: 4 }}
            >
              {month.map((i) => <option key={i} value={i}>{i}</option>)}
            </NativeSelect>
          </FormControl>
          <FormControl>
            <InputLabel
              variant="standard"
              htmlFor="uncontrolled-native">
              Day
            </InputLabel>
            <NativeSelect
              value={DateTime.toString().padStart(2, '0')}
              onChange={(e) => handleDateTimeChange(e)}
              sx={{ marginRight: '10px', zIndex: 4 }}
            >
              {dateTime.map((i) => <option key={i} value={i}>{i}</option>)}
            </NativeSelect>
          </FormControl>
          <Grid textAlign='center'>
            <FormControl
              style={{
                marginTop: '20px',
                width: '210px',
                marginLeft: '15px'
              }}>
              <InputLabel
                variant="standard"
                htmlFor="uncontrolled-native">
                태그 선택
              </InputLabel>
              <NativeSelect
                value={Tag}
                sx={{ zIndex: 4 }}
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
          margin='-20px 0 0 0'
          addstyle={() => {
            return css`
            justify-content: space-between;
            `;
          }}>
          <label style={{ fontWeight: 'bold', color: '#B6C8A5' }}>수입</label>
          <Input
            value={income}
            border='2px solid #B6C8A5'
            width='200px'
            margin='10px 10px 0px 10px'
            height='40px'
            placeholder='0'
            _onChange={handleIncomeChange}
            addstyle={() => {
              return css`
              text-align: right;
              `
            }} />
          <span style={{ fontWeight: 700, marginLeft: '-8px' }}>원</span>
        </Grid>
        <Grid
          textAlign='center'
          margin='40px 0 0 0'
          addstyle={() => {
            return css`
          justify-content: space-between;
        `;
          }}>
          <label
            style={{ fontWeight: 'bold', color: 'red' }}
          >지출</label>
          <Input
            value={expenditure}
            border='2px solid #B6C8A5'
            width='200px'
            margin='10px 10px 0px 10px'
            height='40px'
            placeholder='0'
            _onChange={handleExpenditureChange}
            addstyle={() => {
              return css`
              text-align: right;
              `
            }} />
          <span style={{ fontWeight: 700, marginLeft: '-8px' }}>원</span>
        </Grid>

        <Grid
          textAlign='center'
          margin='40px 0 0 0'
          addstyle={() => {
            return css`
          justify-content: space-between;
        `;
          }}>
          <label
            style={{ fontWeight: 'bold', color: 'blue' }}
          >내용</label>
          <Input
            border='2px solid #B6C8A5'
            value={contents}
            width='200px'
            margin='10px 10px 0px 10px'
            height='40px'
            placeholder='내용을 입력하세요.'
            _onChange={handleContentsChange} />
        </Grid>
        <Grid textAlign='center' height='200px'>
          <Button
            border='none'
            width='80px'
            height='40px'
            margin='40px 0'
            color='white'
            _onClick={() => handleAddAccount()}
          >작성하기</Button>
        </Grid>
      </WriteFormStyle>
    </>
  )
}

export default WriteForm;