import { PieChart } from 'react-minimal-pie-chart';
import { useEffect } from 'react';
import { Grid } from '../../elements'
import { css } from 'styled-components'
import { getStatisticsDB } from '../../redux/modules/AccountModule/account';
//redux
import { useDispatch, useSelector } from 'react-redux';
const Chart = () => {
  const dispatch = useDispatch();
  const statisticState = useSelector((state) => state.account.statistics)
  const userState = useSelector((state) => state.user.user_info.username)
  useEffect(() => {
    dispatch(getStatisticsDB(userState, 10, 2021))
  }, [])
  const data = statisticState.map((item: any) => [
    item.expenditure === 0 ?
      { contents: '', value: 0, color: '', expenditure: '' }
      :
      { contents: item.contents, value: Math.floor(item.avg), color: item.color, expenditure: item.expenditure },
  ])
  console.log(data.flat())
  return (
    <>
      <Grid textAlign='center'>
        <Grid
          textAlign='left'
        >
          <h2 style={{ fontWeight: 'bold', fontSize: '25px', minHeight: '40px' }}>이번달 통계</h2>
        </Grid>
        <PieChart
          style={{ width: '320px' }}
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
          paddingAngle={0.1}
          labelPosition={80}
        />
      </Grid>
      <Grid margin='35px 0 0 0' border='1px solid #B6C8A5'>
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

                <p style={{ fontWeight: 'bold', color: item.color, minHeight: '30px', marginRight: '100px' }}>
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