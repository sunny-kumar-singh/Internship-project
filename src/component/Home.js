import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Doraemon from "./Doraemon";
import { FcBusinessman } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate=useNavigate();
    const num=[1800,2000,2800,3100,3900,4000];
    const[darkMode,setDarkmode]=useState(false)
  const [text] = useTypewriter({
    words: ["Business AI"],
    
  });
  function  click() {
    navigate("/Page")
  }
  function toggleHandler(){
    setDarkmode(!darkMode)
  }
  return (
    
<div className={`${darkMode && "dark"}`} >
    <div className="max-w-100  overflow-x-hidden dark:bg-neutral-600   ">
      <div className="flex justify-between p-5 ">
        <div className="flex gap-2 text-gray-500 text-2xl font-semibold dark:text-white ">
          <ToggleButton onClick={toggleHandler} darkMode={darkMode} setDarkmode={setDarkmode}></ToggleButton>
          <span>Partnership</span>
        </div>
        <span className="w-8 h-8 bg-red-500 rounded-full cursor-pointer" onClick={click} darkMode={darkMode} setDarkmode={setDarkmode} ></span>
      </div>
      
      <div className="flex justify-center items-center w-full h-[212px] ">
        <div className="text-8xl underline decoration-5 decoration-blue-500 font-bold text-gray-600 m-10   dark:text-white">
          {text} |
                 </div>
      </div>
      
      <div className="   flex flex-col justify-around ">
        <div className="flex gap-2 items-center w-full h-14 text-orange-400 m-32 text-2xl font-bold ">
          <FcBusinessman />
          <span>Pick&Partner</span>
        </div>
        <div className="relative mb-28 ">
          <div className="border-[4px] border-t-white shadow-2xl border-b-gray-400 border-dashed "></div> 
          <span  className=" absolute left-[100px] top-[-65px] ">
          <Doraemon  num={num[0] }/>
          </span>
          <span  className=" absolute left-[300px] top-[-65px]">
          <Doraemon num={num[1]}/>
          </span>
          <span  className=" absolute left-[600px] top-[-65px]">
          <Doraemon num={num[2]}/>
          </span>
          <span  className=" absolute left-[900px] top-[-65px]">
          <Doraemon num={num[3]}/>
          </span>
          <span  className=" absolute left-[1200px] top-[-65px]">
          <Doraemon num={num[4]}/>
          </span>
          <span  className=" absolute left-[1400px] top-[-65px]">
          <Doraemon num={num[5]}/>
          </span>
          </div>
         
      </div>
    </div>
    </div>
  
  );
}

export default Home;
