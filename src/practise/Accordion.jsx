import React,{useState} from 'react'

function Accordion() {
    const [show,setshow]=useState(false)
    const [show1,setshow1]=useState(false)
    const [show2,setshow2]=useState(false)

  return (
    <>
    <h1 className='text-center text-4xl text-[#1e3935] capitalize'>frequently asked questions</h1>
 <div className="flex  items-center min-h-screen w-1/2 mx-auto ">
  <div className="px-3 py-5 rounded-xl text-center w-full  bg-gray-200">
    
        <div className='flex flex-col  items-center  border border-green-700 border-2 rounded-3xl '>

            <div className='flex  items-center space-x-10'>
                      <div className='text-2xl py-3 mt-4'>what is useState ?</div> 

                      <div onClick={()=>{setshow(!show)}} className='hover:cursor-pointer bg-cyan-700  px-3 py-1 mt-4 rounded-full text-white '> 
                      {show ? '-':'+'}
                      </div> 
              </div>
                <br/>
                
             {show &&   <p className='px-4 py-2'>
                useState in React: A complete guide - LogRocket Blog
                useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called
                </p> }

          </div>     


          <div className='mt-3 border border-green-700 border-2 rounded-3xl'>
            <p className='text-2xl mt-6'>what is useState? <span  className='hover:cursor-pointer bg-cyan-700 px-2 rounded-full text-white ml-10 ' onClick={()=>{setshow1(!show1)}}>{show1 ? '-':'+'}</span></p>
                <br/>
                
             {show1 &&   <p>
                useState in React: A complete guide - LogRocket Blog
                useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called
                </p> }

          </div>   


          <div className='mt-3 border border-green-700 border-2 rounded-3xl'>
            <p className='text-2xl mt-6'>what is useState? <span  className='hover:cursor-pointer bg-cyan-700 px-2   rounded-full text-white ml-10 ' onClick={()=>{setshow2(!show2)}}>{show2 ? '-':'+'}</span></p>
                <br/>
                
             {show2 &&   <p>
                useState in React: A complete guide - LogRocket Blog
                useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called
                </p> }

          </div>   
  
  
  
  </div>
</div>


</>
  )
}

export default Accordion;



