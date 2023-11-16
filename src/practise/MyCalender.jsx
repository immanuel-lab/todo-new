

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



function MyCalendar() {
  const [startDate, setStartDate] = useState(new Date());
  
  const onChange = (date) => {
    setStartDate(date);

  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Calendar onChange={onChange} value={startDate} 
      showWeekNumbers 
      showNeighboringMonth={false}
      // showNavigation={false}
      // showFixedNumberOfWeeks
      // showDoubleView

       />
      {/* {console.log(startDate)} */}
     <br></br> {startDate.toString()}
    </div>
  );
}
export default MyCalendar;

