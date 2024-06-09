import React from 'react'
import image from '../image/doraemon.jpg'
import { BsTags } from "react-icons/bs";

function Cards(props) {
  return (
    <div className='flex p-7 m-3 w-full ml-16 gap-6 h-24'>
        <div className='text-4xl font-semibold text-orange-400 mr-20'>Doraemon</div>
      <div>
        <img src={image} alt="doracake" className='h-12 w-12 rounded-full' /> </div>
      <div className='text-3xl font-bold text-gray-600 mr-4 ml-6 flex'>$2000 <BsTags className='mt-5' /></div>
      <div className='w-[500px] h-14 ml-6 p-1 pl-5 bg-gray-200 rounded-lg text-4xl text-gray-500  font-bold'>90,000 
        <span className='text-xl '>subs</span>  3% <span className='text-xl'>CTR</span></div>
       
      {!props.num?<div className='text-green-500 text-4xl font-bold ml-5'>198%</div>:
      <div className='text-red-500 text-4xl font-bold ml-5'>{props.num}%</div>}
    </div>
  )
}

export default Cards
