import React, {useState ,useEffect} from 'react'


function IntervalHookcounter() {
    const[count ,setcount]=useState(0)

    const tick= ()=>{
        setcount(prevcount => prevcount +1)

    }

    useEffect(()=>{
        console.log("useeffect initiated")
        const interval= setInterval(tick,1000)

        return ()=>{
            clearInterval(interval)
        }
    },[])

    return (
    <div>
        {count}
    </div>
  )
}

export default IntervalHookcounter