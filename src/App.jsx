import React from "react";
import Home from "./pages/Home";
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from "./pages/cart";

const App =()=>{
    return(<div className="container">
      <BrowserRouter>
       
       <Routes>
    
        
            <Route index element={<Home/>}/>
            <Route path='/cart'element={<Cart/>}/>
      


       </Routes>
       </BrowserRouter>
       
       

    </div>

    )
}
export default App