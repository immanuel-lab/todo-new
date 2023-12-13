import React,{useState} from 'react'
import axios from 'axios';

function Login() {

  const initialState={'username':'','password':''}
  const[formValues,setFormValues]=useState(initialState)
  const[FormError,setFormError]=useState(initialState)
 

const handleChange=(e)=>{
  const {name,value}=e.target
  setFormValues({...formValues,[name]:value})
  // console.log(formValues);

}

const handleSubmit=async(e)=>{
  e.preventDefault();
  // validation
  const errors={}
  if (formValues.username.trim()===''){
    errors.username="username is required"
  }
  if (formValues.password.trim()===''){
    errors.password="password is required"
  }
  
   // Add CORS headers
  //  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  //  axios.defaults.headers.common['Content-Type'] = 'application/json';
  
    if (Object.keys(errors).length === 0) {
      try {
        // Make a POST request to your authentication endpoint
        const response = await axios.post('http://127.0.0.1:8000/token/', formValues)
       
        console.log('Response:', response.data)

        
        // const { access, refresh } =response.data

        const access_token = response.data.access;
const refresh_token =response.data.refresh;

        // Store the tokens securely (e.g., in localStorage)
        localStorage.setItem('accessToken', access_token);
        localStorage.setItem('refreshToken', refresh_token);

        // Redirect or perform other actions on successful login
        console.log('Login successful');
      } catch (error) {
        console.error('Login failed', error);
      }
    } else {
      setFormError(errors);
    }
  };
  



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






