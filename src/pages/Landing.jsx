import React from 'react'
import Welcome from '../components/Welcome'
import Login from '../components/Login'

function Landing() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen">
     <div><Welcome/></div>
        <div><Login/></div>
    </div>
      
    </>
  )
}

export default Landing
