import React, { useEffect } from 'react';
// router
import { useLocation } from 'react-router';
// element
import { Grid } from '../../elements';
// style
import MonthStyle from './style';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getMonthExTagDB } from '../../redux/modules/AccountModule/account';

const Month = (): React.ReactElement => {
  const dispatch = useDispatch();
  const dt = new Date()
  const month = dt.getMonth() + 1
  const year = dt.getFullYear()
  const path: string = useLocation().pathname
  const today = dt.getFullYear() + '년' + (dt.getMonth() + 1) + '월' + dt.getDate() + '일';

  const tagState = useSelector((state) => state.account.tag)
  const userState = useSelector((state) => state.user.user_info.username)

  useEffect(() => {
    dispatch(getMonthExTagDB(userState, month, year))
  }, [dispatch, userState, month, year])

  return path.includes('/home') ? (
    <MonthStyle>
      <h1 style={{ marginTop: '40px', fontSize: '30px' }}>{today}</h1>
    </MonthStyle>
  ) :
    <Grid>
      <MonthStyle>
        <h1 style={{ color: 'black', fontWeight: 700, marginTop: '20px', minHeight: '20px' }}>이번 달 가장 많은 지출</h1>
        <strong style={{ color: 'red', fontSize: '20px' }}>{tagState.tag} </strong>
        <p style={{ marginTop: '20px' }}>해당 태그의 총지출: {tagState.total === undefined ? 0 : Number(tagState.total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
      </MonthStyle>
    </Grid>
}

export default Month;