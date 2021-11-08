import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { css } from 'styled-components'
import { Container } from '../../elements'
import { getCalendarDB } from '../../redux/modules/AccountModule/account';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { StyleWrapper } from './style';
const Calendar = (): React.ReactElement => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user.user_info.username);
  const calendarState = useSelector((state) => state.account.calendar);

  useEffect(() => {
    dispatch(getCalendarDB(userState))
  }, [dispatch, userState])
  const data = calendarState.map((item: any) =>
    [
      { title: item.tag, date: `${item.year}-${parseInt(item.month).toString().padStart(2, '0')}-${parseInt(item.day).toString().padStart(2, '0')}` }
    ])
  return (
    <Container height='auto' addstyle={() => {
      return css`
      z-index: 2;
      `;
    }}>
      <div style={{ margin: '70px auto', width: '95%' }}>
        <StyleWrapper>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView='dayGridMonth'
            height='auto'
            events={data.flat()}
            locale='ko'
          />
        </StyleWrapper>
      </div>
    </Container>
  )
}

export default Calendar;