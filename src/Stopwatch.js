import {useState,useRef,useEffect} from "react";
function Stopwatch()
  {

const [time,setTime]= useState(0);
const [running,setRunning]=useState(true);
const timer =useRef;
useEffect(()=>{
    if(running)
{
    timer.current = setInterval(()=>{
        setTime(pre=>pre+1)
    },1000)
}


return ()=> clearInterval(timer.current)

},[running])

const format=(time)=>{
    let minutes = Math.floor(time / 60 %60);
    let seconds = Math.floor(time  %60);
    seconds = seconds < 10 ? '0' + seconds : seconds
     return minutes+":"+seconds
}
return(
    <div>
        <h1>Stopwatch</h1>
     <p>Time: {format(time)}</p>
     <div>
        <button onClick={()=>{
        setTime(0)
            if(running)
            clearInterval(timer.current)
        setRunning(!running)

        }}>{running?'Start':'Stop'}</button>
        <button onClick={()=>setTime(0)}>Reset</button>
     </div>
    </div>
)
  }
 export default Stopwatch;