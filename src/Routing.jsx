import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Verify from './Auth/Verify';
import Home from './components/Home';
import Laugh from './components/Laugh';
import Prank from './components/Prank';
import Preview from './components/Preview';


function Routing() {
  return (
        <Routes>
              <Route path='signup/' element={<Signup/>}/>
              <Route path='Login/' element={<Login/>}/>
              <Route path='Verify/' element={<Verify/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path='Prank/:id' element={<Prank/>}/>
              <Route path='Laugh/:id' element={<Laugh/>}/>
              <Route path='Preview/:id' element={<Preview/>}/>
       </Routes>
  )
}

export default Routing