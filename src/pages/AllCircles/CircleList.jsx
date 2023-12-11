import React from 'react'
import "./CircleList.css"
import Circle from './Circle'
export default function CircleList({ AllCircles,getAllCircle }) {

  return (
    <div className='h-[100%] w-[100%] bg-slate-900 pb-[11.5rem] pt-[11.5rem]'>
      <div className=' bg-white w-3/5 rounded-md h-auto p-2 m-auto '>
        {
          AllCircles.length>0 && AllCircles.map((circle,index)=>{
            return(<Circle circle={circle} key={index} getAllCircle={getAllCircle}/>)
            
          })
        }
      </div>
    </div>
  )
}
