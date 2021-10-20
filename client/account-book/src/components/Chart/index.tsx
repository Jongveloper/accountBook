import { PieChart } from 'react-minimal-pie-chart';
import { Grid } from '../../elements'
import { css } from 'styled-components'
const Chart = () => {
  const data = [
    { title: '식품', value: 30, color: '#003f5c', income: '2000000' },
    { title: '게임', value: 15, color: '#58508d', spend: '30000' },
    { title: '컴퓨터', value: 20, color: '#ffa600', income: '5000000' }
  ]
  return (
    <>
      <Grid textAlign='center'>
        <Grid
          textAlign='left'
        >
          <h2 style={{ fontWeight: 'bold', fontSize: '25px' }}>통계</h2>
        </Grid>
        <PieChart
          style={{ width: '200px', marginTop: '35px' }}
          data={data}
          lineWidth={70}
          background='#f3f3f3'
          lengthAngle={360}
          animate
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{
            fontSize: '6px',
            fill: 'white',
            fontWeight: 'bold'
          }}
        />
      </Grid>
      <Grid margin='35px 0 0 0' border='1px solid #B6C8A5'>
        {data.map((tag, idx) => {
          return (
            <Grid
              isFlex
              key={idx}
              addstyle={() => {
                return css`
              justify-content: space-between;
            `;
              }}>
              <p style={{ fontWeight: 'bold', color: tag.color, minHeight: '30px', marginRight: '160px' }}>{tag.title}</p>
              <p style={{ color: 'black', minHeight: '30px', fontWeight: 'bold' }}>
                {tag.income ? Number(tag.income).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  :
                  Number(tag.spend).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
              </p>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default Chart;