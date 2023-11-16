import React, { useTransition, useState } from 'react';


function Transition() {
    const[Input,setInput]=useState('')
    const [list, setList] = useState([]);
    const [isPending, startTransition] = useTransition();
  
   
  const handleInput=(e)=>{
    setInput(e.target.value)

    startTransition(()=>{
        let nameDisplay=[];
        let times=60000;
        for(let i=0;i<=times;i++){
            nameDisplay.push(e.target.value)
        }
        setList(nameDisplay)
    })
   

  }
 
  
    return (
      <div className='flex items-center flex-col'>
      <h1 className='mb-5'>useTransition</h1>
      <input type="text" value={Input} onChange={handleInput} placeholder='name' className='border border-2 border-blue-600 px-5 py-2'/>
       {isPending ?<h1>....loading</h1>:list.map((item,index)=>{
        return <div key={index}>{item}</div>
       })}
      </div>
    );
  }
  
export default Transition;