import Home from "./pages/Home";
import Layout from "./pages/Layout";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout/>}>
          <Route index element = {<Home/>}/>  
        </Route>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
