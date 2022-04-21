import React from 'react';
import './App.css';

import {Routes, Route, NavLink, Navigate, BrowserRouter } from "react-router-dom";

import Home from './component/home.js';
import StudentData from './component/student.js';
import Contact from './component/contact';

function App() {
  const navLinkStyle=(param)=>{
        const {isActive}=param;
        return getActiveCss(isActive);
      };
    
      const getActiveCss=(isActive)=>{
        if (isActive){
          return{
              color:"rgb(0, 183, 255)",
            }
        }
        else{
          return{
              color:'White'
            }
        }
      };
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='Navbar'>
            <ul  >
              <li>
                  <NavLink to='/home' style={navLinkStyle}>Home</NavLink>
              </li>
              <li>
                  <NavLink to='/student' style={navLinkStyle}>About</NavLink>
              </li>
              <li>
                  <NavLink to='/contact' style={navLinkStyle}>Contact Us</NavLink>
              </li>
            </ul>
        </div>

       <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/student" element={<StudentData />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate replace to='/'/>} />
       </Routes>
      </div>
    </BrowserRouter>
  )

}

export default App;
