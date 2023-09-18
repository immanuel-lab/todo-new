import React from 'react'
import Button from './Button'

function Login() {
  return (
    <>
    <div className='flex flex-col justify-center items-center w-full h-screen bg-gradient-to-bl from-blue-400 to-purple-500 '>
      <h1 className='text-5xl  uppercase mb-10 font-semibold text-white '>login</h1>
        <form className='border-8 border-purple-600 rounded-lg bg-purple-600 bg-opacity-80 px-12 py-16 flex flex-col justify-center items-center  '>
          {/* <label htmlFor="username">Username</label> */}
          <input type="text" id="username" placeholder='username' name="username" className='border-4 block border-purple-500 text-italics  px-4 py-2 rounded-lg mb-4 focus:outline-none bg-opacity-75 placeholder-gray-500 capitalize '/>
          {/* <label htmlFor="password">password</label> */}

          <br></br>
          <input type="password" id="password" placeholder="password" name="password" className='border-4 block border-purple-500  text-italics  rounded-lg  px-4 py-2 mb-4 focus:outline-none bg-opacity-75 placeholder-gray-500 capitalize'/>
         <br></br>
<Button/>
          </form>
    </div>
    
    </>
  )
}

export default Login
