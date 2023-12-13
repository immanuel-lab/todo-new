import React ,{useRef,useEffect} from 'react'

function Canvas() {

    const inputRef=useRef(null)


function draw(context){

    context.fillStyle='purple'

    context.fillRect(10,20,100,100)

    context.fillStyle='red'
    context.fillRect(200,20,100,100)

    context.fillStyle='#a84c32'
    context.fillRect(400,20,100,100)

    // context.clearRect(10,20,50,50)

    context.font="30px Verdana"
    context.font="30px Times New Roman"
    context.fillText("immanuel",600,100)

    // context.lineWidth=5;
    // context.strokeStyle="#a84c12"
    // context.strokeText("hello",300,500)

    // stokeStyle to draw border alone and strokeStyle for giving colour to border
    // context.strokeStyle = 'purple';  
    // context.lineWidth=5;
    // context.strokeRect(10,20,200,200)


        // context.lineWidth=5;
    // context.strokeStyle="#a84c12"
    // context.strokeText("hello",300,500)
}


function TrianglePath(context){
    context.beginPath()
    context.moveTo(50,50)
    context.lineTo(150,50)
    context.lineTo(100,120)
    // context.lineTo(50,50) or closePath()
     context.closePath()

    context.fillStyle="green"
     context.strokeStyle="red"
     context.stroke()
    context.fill()
}


function circle(context){
    // arc(x, y, radius, startAngle, endAngle, counterclockwise)
    context.beginPath()

}

function smiley(context){
    const canvas = inputRef.current;

    // circle
    context.beginPath()
    context.arc(canvas.width/2,canvas.height/2,100,0,Math.PI*2)
    context.fillStyle="yellow"

    context.fill()

    // left eye
    context.beginPath()
    context.fillStyle="black"
    context.arc(canvas.width/2-30,canvas.height-320,10,0,Math.PI*2)
    context.fill()


    // righteye
    context.beginPath()
    context.fillStyle="black"
    context.arc(canvas.width/2+30,canvas.height-320,10,0,Math.PI*2)
    context.fill()

    // semiarc
    context.beginPath()
    context.arc(canvas.width/2,canvas.height/2+20,50,0,Math.PI,false)
    // context.fillStyle="yellow"
    context.stroke()




}

    useEffect(()=>{
       const canvas= inputRef.current;
       const context=canvas.getContext('2d')
   
        smiley(context)
},[])

  return (
    
    <canvas  ref={inputRef}  width={1200} height={600}>

    </canvas>
      

  )
}

export default Canvas;
