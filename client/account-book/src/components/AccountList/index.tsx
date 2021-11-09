import React, { useEffect } from 'react';
// element
import { Grid } from '../../elements';
// style
import { AccountDateStyle, AccountContentStyle, AccountTagStyle, AccountIncomeStyle } from './style';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getMonthAccountDB, deleteAccountDB } from '../../redux/modules/AccountModule/account';

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
  const handleDelete = (id: number) => {
    dispatch(deleteAccountDB(id))
  }
  return (
    <>
      {accountState.map((account: any, idx: number) => {
        return (
          <div key={idx + Math.random()}>
            <Grid>
              <AccountDateStyle>
                <p style={{ color: '#C1C1C1' }}>
                  {`${account.year}년 ${account.month}월 ${account.day}일`}</p>
                <AccountIncomeStyle>
                  <p>{parseInt(account.income).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                </AccountIncomeStyle>
                <p style={{ color: 'red' }}>-{parseInt(account.expenditure).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                <p style={{ color: 'gray', marginTop: '2px', fontSize: '12px', cursor: 'pointer' }}
                  onClick={() => { handleDelete(account.id) }}>삭제</p>
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