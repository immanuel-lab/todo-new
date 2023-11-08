// import React, { useState } from 'react';

// function Practise() {
//   const[name ,setName]=useState('immanuel')

//   const toggleName = () => {
//     if (name === 'immanuel') {
//       setName('justin');
//     } else {
//       setName('immanuel');
//     }
//   };

//   return (
//     <>
//   <h1>my name is {name}</h1>
//   <button onClick={toggleName}>change name</button>
//     </>
//   );
// }

// export default Practise;

//  useeffect







// import React,{useRef,useEffect,useState} from "react";


// function Practise(){
    
//     // state to display different currencies
//     const [show,setShow]=useState(false)  
//     // set to capture input value  
//     const [val,setVal]=useState( )  
//     // state for keypress
//     const [key,setKey]=useState(false)  
//     //reference to focus on input box on loading useRef and useEffect
//     const value=useRef()
//     useEffect(()=>
//   value.current.focus(),[]
    
// )
  
// // keypress
// function keyEnter(e){
//         if(e.key==="Enter"){
//             console.log("enter pressed")
//         }
// }
  
//     return (
// <>
// <center>

//                     <h1 className="text-gray-600 text-2xl uppercase">currency convertor</h1>
//                     <br></br><br>
                  
//                     </br><br></br>
                   
//        <input type="number" placeholder="enter value..." ref={value}    onKeyPress={(e)=>setKey(e.key==='Enter')}     onChange={(e)=>setVal(e.target.value)} className="p-3 text-2xl"/>
//         <button className="bg-green-500 p-3 text-bold text-white
//          hover:bg-green-700 pointer:cursor uppercase ml-2" onClick={()=>setShow(true)}>get values</button>
//          <br></br><br></br>


//     { show || key? 
//     <div>
//         <p>{val } canadian dollar is {val * 60} rupees</p>
//         <p>{val} american dollar is {val * 78} rupees</p>
//         <p>{val} australian  dollar is {val * 55} rupees</p> 
//         </div> : null
//     }

// {/* {val===" " && setShow(false)} */}

  
      
//         </center>


// </>
//     )
// }
// export default Practise;



// import React,{useRef,useEffect,useState} from "react";


// function Practise(){

// // to get the input values
// const[Input,setInput]=useState("")

//   // to display the answer
//   const[show,setShow]=useState(false)

//   // pressing the key
//   const[keypress,setKeyPress]=useState(false);

//   const handlekeyPress=(e)=>{
//     setKeyPress(e.key==='Enter')
//   }

//   const inputRef=useRef()
//   useEffect(()=>{
//     inputRef.current.focus()
//   },[])

// const handleChange=(e)=>{
//   setInput(e.target.value)
// }




//   return(
//     <>
//     <h1>get the values</h1>
//     <input type="number" onKeyPress={handlekeyPress}  ref={inputRef} onChange={handleChange}  placeholder="enter the value" className="border border-blue-500 border-2"/>
//     <button onClick={()=>{setShow(true)}}>get values</button>

//     {(show || keypress) && Input!=="" ?
//   <div>
//     <h1>the dollar is {Input *80}</h1>
//     <h1>the  pound is {Input *100}</h1>
    
//   </div>  :null
//   }
//     </>
//     )
// }

// export default Practise;





  

import React,{useState} from "react";


function Practise(){
const[show ,setShow]=useState(false)

  return(
<>
<div className="flex justify-between w-full h-20 bg-gray-400">

    <div className="p-4 text-2xl ml-3 "onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}}>home 
    
    
    {show?
    <ul className="mt-10 list-none bg-gray-400 w-full ">
    <li className="px-20 py-3 text-2xl ">ass</li><hr/>
    <li className="px-20 py-3 text-2xl ">assa</li><hr/>
    <li className="px-20 py-3 text-2xl ">assa</li>
    </ul>:null}
    </div>
    <div className="p-4 text-2xl ">contact</div>
    <div className="p-4 text-2xl ">about</div>
    <div className="p-4 text-2xl ">help</div>

</div>

</>
  )
}

export default Practise;