import React from 'react'
import Navbar2 from './components/Navbar/Navbar2'
import {  BrowserRouter, Routes, Route
} from 'react-router-dom';
import Home from "./components/Home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contribute from "./components/Contribute/Contribute";
import Team from "./components/Team/Team";
import "./App.css"
import Events2 from './components/Events/Events2';
import ScrollToTop from './components/Home/ScrollToTop';
import Footer from "../src/components/Footer/Footer"
import Success from './components/Contribute/Success';

const App = () => {
  return (
    <BrowserRouter>
     <ScrollToTop/>
    <div className="App">
      <div className="app-navbar"> 
    <Navbar2 />
    <ToastContainer/>
    </div>
    <div className='app-component' >
    <Routes>
     
    <Route path="/" element={<Home />}></Route>
    <Route path="/Events" element={<Events2/>}></Route>
    <Route path="/contribute" element={<Contribute/>}></Route>    
    <Route path="/Team" element={<Team />}></Route>
    {/* <Route path="/contribute/success" element={<Success/>}></Route> */}
    </Routes>
    </div>
    <Footer/>
  </div>
  
  </BrowserRouter>
    );
  };
  
  export default App;
  
