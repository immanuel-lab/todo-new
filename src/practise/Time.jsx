// import React from 'react'

// function Time() {
//   const currentDate = new Date();
//   const formattedDate = currentDate.toLocaleDateString();
//   return (
//     <>
//          {/* <h1>Current Date:</h1> */}
//       <p>{formattedDate}</p>
//     </>
//   )
// }

// export default Time


import React, { useState, useEffect } from 'react';

function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update the time every 1 second (1000 milliseconds)

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <div>
      <h1>Live Time:</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default Time;


// import React, { useState, useEffect } from 'react';

// function CountdownTimer() {
//   const initialTime = 600; // 10 minutes in seconds
//   const [time, setTime] = useState(initialTime);

//   useEffect(() => {
//     if (time > 0) {
//       const intervalId = setInterval(() => {
//         setTime(prevTime => prevTime - 1);
//       }, 1000); // Update the countdown every 1 second (1000 milliseconds)

//       return () => {
//         clearInterval(intervalId); // Clear the interval when the component unmounts
//       };
//     }
//   }, [time]);

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
//   };

//   return (
//     <div>
//       <h1>Countdown Timer:</h1>
//       <p className='text-red-500 text-3xl'>{formatTime(time)}</p>
//     </div>
//   );
// }

// export default CountdownTimer;

