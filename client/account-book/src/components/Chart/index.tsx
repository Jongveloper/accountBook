import { PieChart } from 'react-minimal-pie-chart';
import { useEffect } from 'react';
import { Grid } from '../../elements'
import { css } from 'styled-components'
import { getStatisticsDB } from '../../redux/modules/AccountModule/account';
//redux
import { useDispatch, useSelector } from 'react-redux';
const Chart = (): React.ReactElement => {
  const dispatch = useDispatch();
  const statisticState = useSelector((state) => state.account.statistics)
  const userState = useSelector((state) => state.user.user_info.username)
  const date = new Date();
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  useEffect(() => {
    dispatch(getStatisticsDB(userState, month, year))
  }, [dispatch, userState, month, year])
  const data = statisticState.map((item: any) => [
    item.expenditure === 0 ?
      { contents: '', value: 0, color: '' }
      :
      { contents: item.contents, value: Math.floor(Number(item.avg)), color: item.color },
  ])


  return (
    <>
      <Grid width='70%' margin='auto'>
        <Grid
          textAlign='left'
        >
          <h2 style={{ fontWeight: 'bold', fontSize: '25px', marginLeft: '-25%', minHeight: '40px' }}>이번달 지출 통계</h2>
        </Grid>
        <PieChart
          data={data.flat()}
          lineWidth={70}
          background='white'
          lengthAngle={360}
          animate
          label={({ dataEntry }) => dataEntry.contents}
          labelStyle={{
            fontSize: '5.5px',
            fill: 'white',
            fontWeight: 'bold',
          }}
          labelPosition={80}
        />
      </Grid>
      <Grid margin='35px 0 0 0' border='1px solid #B6C8A5' height='200px'>
        {statisticState.map((item: any, idx: number) => {
          return (
            item.expenditure === 0 ? null :
              <Grid
                isFlex
                key={idx}
                addstyle={() => {
                  return css`
              justify-content: space-between;
            `;
                }}>

                <p style={{ fontWeight: 'bold', color: item.color, minHeight: '30px', marginRight: '60px' }}>
                  {item.contents}</p>

                <p style={{ color: 'black', minHeight: '30px', fontWeight: 'bold' }}>
                  {
                    Number(item.expenditure).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  } 원
                </p>

              </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default Chart;