import React from 'react';
import { css } from 'styled-components'
import { history } from '../../redux/configureStore';
import { useLocation } from 'react-router';
// material-icon
import HomeIcon from '@material-ui/icons/Home'
import Chart from '@material-ui/icons/PieChart'
import DateRangeIcon from '@material-ui/icons/DateRange';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
//style
import { Grid, Button } from '../../elements';
import { NavigationStyle, NavigationIcons } from './style';
//path
import { HeaderIncluded } from '../../route/Path';


const Navigation = () => {
  const path: string = useLocation().pathname
  return HeaderIncluded.includes(path) ? (
    <Grid
      width='100%'
      position='fixed'
      bottom='0'
      height='80px'
      z='3'
    >
      <Grid
        addstyle={() => {
          return css`
        border-top: '1px solid black';
        `;
        }}>
        <NavigationStyle>
          <NavigationIcons
            className={path.includes('/home') ? 'Click' : ''}
            onClick={() => history.push('/home')}>
            <HomeIcon />
            <p style={{ marginTop: '10px' }}>홈</p>
          </NavigationIcons>
          <NavigationIcons
            className={path.includes('/chart') ? 'Click' : ''}
            onClick={() => history.push('/chart')}>
            <Chart />
            <p style={{ marginTop: '10px' }}>통계</p>
          </NavigationIcons>
          <Button
            bgColor='olive'
            width='40px'
            radius='20px'
            border='none'
            height='40px'
            color='white'
            fs='xl'
            _onClick={() => history.push('/write')}>+</Button>
          <NavigationIcons
            className={path.includes('/calendar') ? 'Click' : ''}
            onClick={() => history.push('/calendar')}>
            <DateRangeIcon />
            <p style={{ marginTop: '10px' }}>달력</p>
          </NavigationIcons>
          <NavigationIcons
            className={path.includes('/info') ? 'Click' : ''}
            onClick={() => history.push('/info')}>
            <PermIdentityIcon />
            <p style={{ marginTop: '10px' }}>내정보</p>
          </NavigationIcons>
        </NavigationStyle>
      </Grid>
    </Grid>
  ) : null
}

export default Navigation;