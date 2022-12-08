import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { activate } from '../Redux/redux'

const Trafficlight = () => {
    let color1 = useSelector(state=>state.trafficReducer.color1)
    let color2 = useSelector(state=>state.trafficReducer.color2)
    let color3 = useSelector(state=>state.trafficReducer.color3)
    let parameter = 0
    let dispatch = useDispatch()
    const switchLight =()=>{
        parameter++
        dispatch(activate(parameter))
        if(parameter>3){
            parameter = 0
        }
        setTimeout(switchLight,2000)
       
    }  
  return (
    <>
    <div className='container p1 p-2 border'>
        <div className='container p1 py-2 bg-dark'>
            <div className={`circle ${color1}`} onClick={()=>dispatch(activate(1))}></div>
            <div className={`circle ${color2}`} onClick={()=>dispatch(activate(2))}></div>
            <div className= {`circle ${color3}`} onClick={()=>dispatch(activate(3))}></div>
        </div>
        <button onClick={switchLight} className='btn btn-primary'>Start Light</button>
    </div>
    </>
  )
}

export default Trafficlight