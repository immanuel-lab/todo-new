import React,{useState,useEffect} from 'react'
import aaa from '../images/aaa.jpg'
import bbb from '../images/bbb.jpg'
import ccc from '../images/ccc.jpg'
import ddd from '../images/ddd.jpg'
import eee from '../images/eee.jpg'

import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import {GoDot} from 'react-icons/go'


function Imageslider() {

  const images=[aaa,bbb,ccc,ddd,eee]

  const[Index ,setIndex]=useState(0)

  const prevSlide=()=>{
    const isFirstSlide=Index===0
    const newIndex=isFirstSlide?images.length-1:Index-1
    setIndex(newIndex)
  }

  const nextSlide=()=>{
    const isLastSlide=Index===images.length-1
    const newIndex=isLastSlide?0:Index+1
    setIndex(newIndex)
    }


    const ClickDots=(index)=>{
        setIndex(index)
    }


    useEffect(() => {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 3000);
    
      return () => {
        // Clear the interval when the component unmounts
        clearInterval(intervalId);
      };
    }, [Index]);
    




  return (
    <>
    <div className='w-11/12l h-96 bg-slate-500 relative group'>
    <img src={images[Index]} alt="images"  className='w-full h-full object-cover transition-opacity duration-1000'/>
    
    <div  onClick={prevSlide} className='bg-black/20 bg-opacity-50 p-3  rounded-full absolute top-[50%] hidden group-hover:block hover:cursor-pointer'>
      <AiOutlineArrowLeft  size={20}  className='text-white/50' />
    </div>

    <div  onClick={nextSlide} className='bg-black/20 bg-opacity-100 p-3  rounded-full absolute top-[50%] right-0 hidden group-hover:block hover:cursor-pointer'>
      <AiOutlineArrowRight size={20} className='text-white/50' />
    </div>
    

        {/* image dots with index */}
          <div className='flex justify-center items-center absolute left-0 right-0 bottom-0'>
          {images.map((items,index)=>(
            <GoDot size={20} key={index}  className={Index===index ?'text-blue-500':'text-white/20' }
            onClick={()=>{ClickDots(index)}}
            
            />
          )

)}
        </div>


        </div>







  
  
    </>

  )
  }

export default Imageslider
