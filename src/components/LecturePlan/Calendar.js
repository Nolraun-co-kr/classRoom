import React, { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

const LecturePlanCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className={'lectureCalendar'}>
      <Calendar
        onChange={onChange}
        value={value}
        calendarType={'US'}
        minDate={new Date()}
        formatMonthYear={(locale, date) => dayjs(date).format('YYYY. M')}
      />
    </div>
  );
};

export default LecturePlanCalendar;
