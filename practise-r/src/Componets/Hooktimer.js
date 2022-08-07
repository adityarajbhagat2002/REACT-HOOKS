import React , {useState,useEffect, useRef} from 'react'


function Hooktimer() {
    const [timer,settimer] = useState(0)

    const  intervalref=useRef()

    useEffect(()=>{
        intervalref.current= setInterval(()=>{
            settimer(prevtimer => prevtimer +1)
        },1000)
        return ()=>{
            clearInterval(intervalref.current)
        };
    },[])
  return (
    <div>
        <div>

        Hook Time - {timer}
        </div>

        <button onClick={()=>clearInterval(intervalref.current)}>CLEAR TIMER</button>

    </div>
  )
}

export default Hooktimer