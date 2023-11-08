
//OBJECT PROPERTIES  fit cover contain none

// import React from 'react'
// import bbb from '../images/bbb.jpg'

// function Background() {
//   return (
//         <>

//         {/* <div className='bg-green-500'>
//         <img src={bbb} alt="img" className='w-full h-72 object-cover ' />
//         </div>
//         <div className='bg-gray-500'>

//         <img src={bbb} alt="img" className='w-full h-72 object-contain  ' />
//         </div>

//         <div className='bg-yellow-500 mt-32 mb-12'>

// <img src={bbb} alt="img" className='w-full h-72 object-contain object-left ' />
// </div>

// <div className='bg-yellow-500 mt-32 mb-12'>

// <img src={bbb} alt="img" className='w-full h-72 object-contain object-right ' />
// </div> */}


      
//     </>
//   )
// }

// export default Background



// BACKGROUND IMAGES


// import React from 'react';
// import bbb from '../images/bbb.jpg'; // Import your image

// function Background() {
//   return (
//     <div
//       className="w-full h-72  bg-contain bg-no-repeat"
//       style={{
//         backgroundImage: `url(${bbb})`,
//       }}
//     >
//       {/* Your content goes here */}
//     </div>
//   );
// }

// export default Background;

import React from 'react';
import bbb from '../images/bbb.jpg'; // Import your image

function Background() {
  return (
    <div
      className="w-full h-72  bg-cover bg-center"
      style={{
        backgroundImage: `url(${bbb})`,
      }}
    >
      {/* Your content goes here */}
    </div>
  );
}

export default Background;
