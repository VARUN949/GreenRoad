import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import FormCircle from "./pages/Form/FormCircle.js"
import AllCircles from "./pages/AllCircles/AllCircles.jsx";
// import FormSignle from "./pages/Form/FormSignle.js"


function App() {
  return (

    <BrowserRouter>
      <Routes>

      {/* <Route index path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/SignUp"/> */}
      <Route path="/" element={<FormCircle/>}/>
      <Route path="/allcircles" element={<AllCircles/>}/>

      {/* <Route path="/signal" element={<FormSignle/>}/> */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
