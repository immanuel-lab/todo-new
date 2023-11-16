import { useState,useMemo } from "react"

function Memoise() {
    let arr=[1,2,3,4,5,10]

    const[array,setArray]=useState(arr)
    const[count,setCount]=useState(0)

    function max(){
        console.log("running");
            return Math.max(...arr)

    }

    const memoisedValue=useMemo(()=>max(),[array])

    

  return (
    <div className="flex flex-col  items-center text-2xl mt-4">
        <button onClick={()=>setCount(count+1)} className="bg-green-500 p-2 text-white">count</button>
        
        <button className="bg-green-500 p-2 text-white" onClick={()=>setArray([...array,Math.trunc(Math.random()*100)])}>add to array</button>
        <h1>{count}</h1>
    <h1>{JSON.stringify(array)}</h1>
      {memoisedValue}
    </div>
  )
}

export default Memoise
