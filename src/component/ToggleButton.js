import { useState } from "react";
const ToggleButton = (props) => {
    const [active, setActive] = useState(false);
   let darkMode=props.darkMode
   let setDarkmode=props.setDarkmode
    const toggleButton = () => {
      setActive(!active);
      setDarkmode(!darkMode)
    };
  
    return (
      <div
        className={`flex items-center w-16 h-8 rounded-full cursor-pointer relative ${
          !active ? 'bg-gray-400' : 'bg-gray-200'
        }`}
        onClick={toggleButton} 
      >
        <div   className="absolute left-2 text-sm">✨</div>
        <div   className="absolute left-10 text-sm">✨</div>
        <div
          className={`w-6 h-6 bg-gray-800 rounded-full transition-transform duration-300 transform ${
            active ? 'translate-x-8' : 'translate-x-1'
          }`}
        ></div>
      </div>
    );
  };
  
  export default ToggleButton;