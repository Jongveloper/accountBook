import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { css } from 'styled-components'
import { Container } from '../../elements'

const Calendar = (): React.ReactElement => {
  return (
    <Container height='auto' addstyle={() => {
      return css`
      z-index: 2;
      `;
    }}>
      <div style={{ margin: '70px auto', padding: '0', width: '360px' }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          height='600px'
          events={[
            { title: '식품', date: '2021-10-02' },
            { title: '수입', date: '2021-10-05' }
          ]}
          locale='ko'
        />
      </div>
    </Container>
  )
}

export default Calendar;