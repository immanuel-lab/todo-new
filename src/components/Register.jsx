import React,{useState,useEffect} from 'react';
import axios from 'axios'; 

function Register() {
  const initialValues={'username':'','email':'','phoneNumber':'','password':'','confirmPassword':''}
  const[InputValues,setInputValues]=useState(initialValues);
  const[InputErrors,setInputErrors]=useState(InputValues);
  const [successMessage, setSuccessMessage] = useState('');


const handleChange=(e)=>{
  const {name,value}=e.target
  setInputValues({...InputValues,[name]:value})
  // console.log(InputValues);
}

const handleSubmit=(e)=>{
  e.preventDefault()
setInputErrors(validate(InputValues))
}

const validate=(values)=>{
  const errors={}
  const phoneNumberPattern = /^\d{10}$/;

  if (InputValues.username.trim()===''){
    errors.username="username is required"
  }
if(InputValues.email.trim()===''){
  errors.email='email is required'
} 

if(InputValues.phoneNumber.trim()===''){
  errors.phoneNumber='phone number  is required'
}else if(!phoneNumberPattern.test(InputValues.phoneNumber)){
  errors.phoneNumber="please enter a valid phone number"
}
  if (InputValues.password.trim()===''){
    errors.password="password is required"
  }
  if (InputValues.confirmPassword.trim()===''){
    errors.confirmPassword="confirm password is required"
  }
  
if(InputValues.password!==InputValues.confirmPassword){
  errors.mismatchPassword="passwords dont match"
}
if(InputValues.password.length<8){
  errors.passwordLength="please enter a password of atleast 8 charecters"
}
  
const requestData = {
  username: InputValues.username,
  email: InputValues.email,
  phoneNumber: InputValues.phoneNumber,
  password: InputValues.password,
};
  
    if (Object.keys(InputErrors).length === 0) {
      axios
        .post('http://localhost:8000/register/', requestData) // Send a POST request to your server
        .then((response) => {
          console.log('Response from server:', response.data);
          setSuccessMessage('User successfully registered');
          setInputValues(initialValues);
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle error here, e.g., display an error message to the user
        });
    }
  
  else {
      setInputErrors(errors);
    }
 
  
  return errors;
}


useEffect(() => {
  if (successMessage) {
    // Automatically hide the success message after 5 seconds
    const timer = setTimeout(() => {
      setSuccessMessage('');
    }, 5000);

    return () => {
      // Cleanup the timer when the component unmounts or when successMessage changes
      clearTimeout(timer);
    };
  }
}, [successMessage]);

  return (
    <>
  

      <div className='bg-cyan-700 w-full min-h-screen flex justify-center items-center'>
        <div className='w-full max-w-lg p-4 rounded-lg bg-purple-800 mt-5 mb-7'>
        
        {successMessage && 
            <div className="bg-green-500 text-white p-2 mb-4 text-center">
              {successMessage}
            </div>}

          <h1 className='text-center text-5xl text-white uppercase mb-5'>Register</h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               name='username'
                id="username"
                type='text'
                placeholder='Enter your username'
                value={InputValues.username}
                onChange={handleChange}
              />
            </div>
      {InputErrors.username && <p className='text-red-400'>{InputErrors.username}</p> }
            
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name='email'
                id="email"
                type='email'
                placeholder='Enter your email'
                value={InputValues.email}
                onChange={handleChange}
              />
            </div>
            {InputErrors.email && <p className='text-red-400'>{InputErrors.email}</p> }

            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               name='phoneNumber'
                id="phoneNumber"
                type='tel'
                placeholder='Enter your phone number'
                value={InputValues.phoneNumber}
                onChange={handleChange}
              />
            </div>
            {InputErrors.phoneNumber && <p className='text-red-400'>{InputErrors.phoneNumber}</p> }

            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               name='password'
                id="password"
                type='password'
                placeholder='Enter your password'
                value={InputValues.password}
                onChange={handleChange}
              />
            </div>
            {InputErrors.password && <p className='text-red-400'>{InputErrors.password}</p> }
            {InputErrors.passwordLength && <p className='text-red-400'>{InputErrors.passwordLength}</p>}


            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               name='confirmPassword'
                id="confirmPassword"
                type='password'
                placeholder='Confirm your password'
                value={InputValues.confirmPassword}
                onChange={handleChange}
              />
            </div>
            {InputErrors.confirmPassword&& <p className='text-red-400'>{InputErrors.confirmPassword}</p> }

            {InputErrors.mismatchPassword && <p className='text-red-400'>{InputErrors.mismatchPassword}</p>}

            <div className="flex items-center justify-center">
              <button
                className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
