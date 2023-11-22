import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Form from "./pages/Form/Form.js"



function App() {
  return (

    <BrowserRouter>
      <Routes>

      {/* <Route index path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/SignUp"/> */}
      <Route path="/" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
