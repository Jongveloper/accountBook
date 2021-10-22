import React, { useEffect } from 'react';
import { Grid } from '../../elements';
import { AccountDateStyle, AccountContentStyle, AccountTagStyle } from './style';
// redux
import { getAccountDB } from '../../redux/modules/AccountModule/account';
import { useDispatch, useSelector } from 'react-redux';

const AccountList = () => {
  const dispatch = useDispatch();
  const accountState = useSelector((state) => state.account.account);
  const userState = useSelector((state) => state.user.user_info.username);
  console.log(accountState)
  useEffect(() => {
    dispatch(getAccountDB(userState))
  }, [dispatch, userState])
  return (
    <>
      {accountState.map((account: any, idx: number) => {
        return (
          <>
            <Grid>
              <AccountDateStyle>
                <p style={{ color: '#C1C1C1' }}>
                  {`${account.year}년 ${account.month}월 ${account.day}일`}</p>
                <p style={{ marginRight: '-100px', color: '#B6C8A5' }}>{account.income}원</p>
                <p style={{ color: 'red' }}>{account.expenditure}원</p>
              </AccountDateStyle>
              <AccountContentStyle>
                <p>{`$ ${account.contents}`}</p>
                {`${account.income - account.expenditure} > 0` ?
                  <p style={{ color: '#B6C8A5' }}>{`${account.income - account.expenditure}`}원</p> :
                  <p style={{ color: 'red' }}>{`${account.income - account.expenditure}`}원</p>}

              </AccountContentStyle>
              <AccountTagStyle>
                <p>{account.tag}</p>
              </AccountTagStyle>
            </Grid>
          </>
        )
      })}

    </>
  )
}

export default AccountList;