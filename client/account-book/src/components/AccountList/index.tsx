import React from 'react';
import { Grid } from '../../elements';
import { AccountDateStyle, AccountContentStyle, AccountTagStyle } from './style';
const AccountList = () => {
  return (
    <>
      <Grid>
        <AccountDateStyle>
          <p style={{ color: '#C1C1C1' }}>21년 01월 24일</p>
          <p style={{ marginRight: '-100px', color: '#B6C8A5' }}>0원</p>
          <p style={{ color: 'red' }}>-100원</p>
        </AccountDateStyle>
        <AccountContentStyle>
          <p>$ 커피</p>
          <p style={{ color: 'red' }}>-10000원</p>
        </AccountContentStyle>
        <AccountTagStyle>
          <p>식품/음료</p>
        </AccountTagStyle>
      </Grid>
      <Grid>
        <AccountDateStyle>
          <p style={{ color: '#C1C1C1' }}>21년 01월 24일</p>
          <p style={{ marginRight: '-100px', color: '#B6C8A5' }}>0원</p>
          <p style={{ color: 'red' }}>-100원</p>
        </AccountDateStyle>
        <AccountContentStyle>
          <p>$ 커피</p>
          <p style={{ color: 'red' }}>-10000원</p>
        </AccountContentStyle>
        <AccountTagStyle>
          <p>식품/음료</p>
        </AccountTagStyle>
      </Grid>
    </>
  )
}

export default AccountList;