import React,{useState} from 'react'

function Login() {

  const initialState={'username':'','password':''}
  const[formValues,setFormValues]=useState(initialState)
  const[FormError,setFormError]=useState(initialState)
 

const handleChange=(e)=>{
  const {name,value}=e.target
  setFormValues({...formValues,[name]:value})
  // console.log(formValues);

}

const handleSubmit=(e)=>{
  e.preventDefault();
  // validation
  const errors={}
  if (formValues.username.trim()===''){
    errors.username="username is required"
  }
  if (formValues.password.trim()===''){
    errors.password="password is required"
  }
  if(Object.keys(errors).length===0){
    console.log('form Data=',formValues)
  }
  else{
    setFormError(errors)
  }

}
// bg-gradient-to-bl from-blue-500 to-green-400

  return (
    <>

    <div className='flex flex-col justify-center items-center w-full h-screen bg-gradient-to-bl from-purple-500 to-blue-500  '>
      <h1 className='text-5xl  uppercase mb-10 font-semibold text-white '>login</h1>
        <form onSubmit={handleSubmit} className='border-8 border-purple-600 rounded-lg bg-purple-600 bg-opacity-80 px-12 py-16 flex flex-col justify-center items-center  '>
          {/* <label htmlFor="username">Username</label> */}

         
          <input   type="text" id="username" placeholder='username' name="username"  value={formValues.username} onChange={handleChange} className='border-4 block border-purple-500 text-italics  px-4 py-2 rounded-lg mb-4 focus:outline-none bg-opacity-75 placeholder-gray-500 capitalize '/>
          {/* <label htmlFor="password">password</label> */}
       
         <br/>
          

          <input type="password" id="password" placeholder="password" name="password"  value={formValues.password} onChange={handleChange} className='border-4 block border-purple-500  text-italics  rounded-lg  px-4 py-2 mb-4 focus:outline-none bg-opacity-75 placeholder-gray-500 capitalize'/>
         
         <br></br>
         <button   className='bg-cyan-700 px-4 py-2 text-white rounded-lg hover:bg-cyan-600 focus:outline-none '>login</button>


  {FormError.username && <div className='mt-5 text-red-500 bg-white px-3 py-1'>{FormError.username}</div>}
        
  { FormError.password && <div className='mt-2 text-red-500 bg-white px-3 py-1'>{FormError.password}</div> }
          
          
          
          </form>
    </div>

    </>
  )
}

export default Login






// import React, { useState } from 'react';
// import Button from './Button';

// function Login() {
//   // Define state variables for form inputs and validation errors
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({
//     username: '',
//     password: '',
//   });

//   // Function to handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform validation here
//     const newErrors = {};
//     if (formData.username.trim() === '') {
//       newErrors.username = 'Username is required';
//     }
//     if (formData.password.trim() === '') {
//       newErrors.password = 'Password is required';
//     }

//     if (Object.keys(newErrors).length === 0) {
//       // Form is valid, you can submit it here
//       console.log('Form submitted:', formData);
//     } else {
//       // There are validation errors, update the errors state
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className='flex flex-col justify-center items-center w-full h-screen bg-gradient-to-bl from-blue-400 to-purple-500'>
//       <h1 className='text-5xl uppercase mb-10 font-semibold text-white'>login</h1>
//       <form
//         className='border-8 border-purple-600 rounded-lg bg-purple-600 bg-opacity-80 px-12 py-16 flex flex-col justify-center items-center'
//         onSubmit={handleSubmit}
//       >
//         <input
//           type='text'
//           id='username'
//           placeholder='Username'
//           name='username'
//           className={`border-4 block border-purple-500 text-italics px-4 py-2 rounded-lg mb-4 focus:outline-none bg-opacity-75 placeholder-gray-500 capitalize ${
//             errors.username ? 'border-red-500' : ''
//           }`}
//           value={formData.username}
//           onChange={handleInputChange}
//         />
//         {errors.username && <p className='text-red-500'>{errors.username}</p>}
//         <input
//           type='password'
//           id='password'
//           placeholder='Password'
//           name='password'
//           className={`border-4 block border-purple-500 text-italics rounded-lg px-4 py-2 mb-4 focus:outline-none bg-opacity-75 placeholder-gray-500 capitalize ${
//             errors.password ? 'border-red-500' : ''
//           }`}
//           value={formData.password}
//           onChange={handleInputChange}
//         />
//         {errors.password && <p className='text-red-500'>{errors.password}</p>}
//         <Button />
//       </form>
//     </div>
//   );
// }

// export default Login;