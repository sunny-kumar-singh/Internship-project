import React from 'react'
import Cards from './Cards'
import { useNavigate } from 'react-router-dom'
function Page(props) {
  
    const Navigate=useNavigate();
    let darkMode=props.darkMode
    let setDarkmode=props.setDarkmode
    function  click() {
        Navigate(-1);
    }

    function clickHandler(){
      setDarkmode(!darkMode)
    }
  return (
    
    <div className="overflow-x-hidden overflow-y-hidden ">
      <div className='flex justify-between p-8  '>
        <div className=' flex justify-around  '>
           <span className='text-8xl font-bold text-gray-500 mr-2'>| Business AI</span>
           <span className='text-gray-700 text-xl font-bold ml-14 mt-16'>207 picks</span>

        </div>
    
        <span className='h-8 w-8 bg-red-500 rounded-full 'onClick={click} ></span>
        <span className='h-6 w-6 bg-white absolute top-9 right-9 rounded-full ' onClick={clickHandler} onClick={click}></span>
     
      </div>
      <div className="flex-row gap-2" >
        <Cards/>
        <Cards/>
        <Cards num={50}/>
        <Cards />
        <Cards />

      </div>
    </div>
  )
}

export default Page
