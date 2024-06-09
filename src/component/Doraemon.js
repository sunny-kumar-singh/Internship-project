import React from 'react'
import image from '../image/doraemon.jpg'
function Doreemon(props) {
    
  return (
    <div className='flex flex-col justify-between h-28 w-14 '>
      <img src={image} alt="doraemon"  className='w-14 h-14 rounded-full'/>
      <div className='flex w-14 justify-center'><div className='w-3 h-3 rounded-full bg-orange-500'></div></div>
         <div className='text-orange-500 font-bold text-2xl text-center'>{props.num}</div>
    </div>
  )
}

export default Doreemon
