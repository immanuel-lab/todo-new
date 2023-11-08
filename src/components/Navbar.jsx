import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {IoIosNotifications} from 'react-icons/io'
import {AiFillSetting} from 'react-icons/ai'
import {BiSolidJoystick} from 'react-icons/bi'

function Navbar() {
  return (
    <>
    <div className='   flex justify-center items-center  space-x-24 py-6'>
        <p className='text-gray-600'><AiFillHome  size={25}/></p>
        <p className='text-gray-600'><BiSolidJoystick size={25}/></p>
        <p className='text-gray-600'><IoIosNotifications size={25}/></p>
        <p className='text-gray-600'><AiFillSetting size={25}/></p>
         
    </div>
      
    </>
  )
}

export default Navbar
