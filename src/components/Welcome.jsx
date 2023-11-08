import React  from 'react'
import Register from './Register'

function Welcome() {
  return (
    <>
      <div className="flex flex-col justify-center items-center  w-full h-screen bg-cyan-700 ">
        
        <h1 className="text-center text-white text-6xl uppercase mb-10 animate-bounce">new here !!!</h1>
        <h1 className='text-center text-white text-xl underline underline-offset-4 mb-3 italic uppercase hover:cursor-pointer'>register here</h1>
        <h1 className="text-center text-white text-2xl font-light capitalize">discover a great amount of features & utilities</h1> 
      </div>
    </>
  )
}

export default Welcome
