import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import {  Route, Routes } from 'react-router-dom';
import Profile from './component/Profile';

import { useState } from 'react';


function App() {
  return(
  <div className='App'>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      
      </Routes>
    
    </div>
  );
}

export default App;
