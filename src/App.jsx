import "./App.css"
import Home from "./component/Home";
import Page from "./component/Page";

import {Routes, Route } from "react-router-dom";
function App(){
  
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Page" element={<Page/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
