import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import MonthStyle from './style';
import { Grid } from '../../elements';

//redux
import { getMonthExTagDB } from '../../redux/modules/AccountModule/account';
import { useDispatch, useSelector } from 'react-redux';
const Month = () => {
  const dispatch = useDispatch();
  const dt = new Date()
  const path: string = useLocation().pathname
  const today = dt.getFullYear() + '년' + (dt.getMonth() + 1) + '월' + dt.getDate() + '일';

  const tagState = useSelector((state) => state.account.tag)
  const userState = useSelector((state) => state.user.user_info.username)
  console.log(tagState)

  useEffect(() => {
    dispatch(getMonthExTagDB(userState, dt.getMonth() + 1, dt.getFullYear()))
  }, [])

  return path.includes('/home') ? (
    <MonthStyle>
      <h1 style={{ marginTop: '40px', fontSize: '40px' }}>{today}</h1>
    </MonthStyle>
  ) :
    <Grid>
      <MonthStyle>
        <h1 style={{ color: 'black', fontWeight: 700, marginTop: '20px', minHeight: '20px' }}>이번 달 가장 많은 지출</h1>
        <strong style={{ color: 'red', fontSize: '20px' }}>{tagState.tag} </strong>
        <p style={{ marginTop: '20px' }}>해당 태그의 총지출: {tagState.total}원</p>
      </MonthStyle>
    </Grid>
}

export default Month;