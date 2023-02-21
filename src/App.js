import React from 'react';
import './workout.css';
import Navbar from './Navbar/Navbar';


import { Route, Routes } from "react-router-dom"
import Profile  from "./pages/Profile"
import Search from "./pages/Search"
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import Home from "./pages/Home"
import ForgotPassword from "./pages/ForgotPassword"



function App() {
  return (
    <div className="App">
<>
<Navbar />
<Routes>
<Route path='/' element={<Home />} />
<Route path='/Profile' element={<Profile />} />
<Route path='/Search' element={<Search />} />
<Route path='/Settings' element={<Settings />} />
<Route path='/Login' element={<Login />} />

<Route path='/ForgotPassword' element={<ForgotPassword />} />



</Routes>

  
      
      </>
      
    </div>
  )
}


export default App;
