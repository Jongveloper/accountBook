import React, { useEffect } from 'react';
import { Grid } from '../../elements';
import { AccountDateStyle, AccountContentStyle, AccountTagStyle } from './style';
// redux
import { getMonthAccountDB } from '../../redux/modules/AccountModule/account';
import { useDispatch, useSelector } from 'react-redux';

const AccountList = (): React.ReactElement => {
  const dispatch = useDispatch();
  const accountState = useSelector((state) => state.account.account);
  const userState = useSelector((state) => state.user.user_info.username);
  const date = new Date()
  const month = date.getMonth() + 1;
  const year = date.getFullYear()
  useEffect(() => {
    dispatch(getMonthAccountDB(userState, month, year))
  }, [dispatch, userState, month, year])
  return (
    <>
      {accountState.map((account: any, idx: number) => {
        return (
          <div key={idx + Math.random()}>
            <Grid>
              <AccountDateStyle>
                <p style={{ color: '#C1C1C1' }}>
                  {`${account.year}년 ${account.month}월 ${account.day}일`}</p>
                <p style={{ marginRight: '-100px', color: '#B6C8A5' }}>{parseInt(account.income).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                <p style={{ color: 'red' }}>-{parseInt(account.expenditure).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
              </AccountDateStyle>
              <AccountContentStyle>
                <p>{`₩ ${account.contents}`}</p>
                <p style={{ color: 'black' }}>{`${(account.income - account.expenditure).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}원</p>
              </AccountContentStyle>
              <AccountTagStyle>
                <p>{account.tag}</p>
              </AccountTagStyle>
            </Grid>
          </div>
        )
      })}

    </>
  )
}

export default AccountList;