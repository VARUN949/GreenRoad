import React, { useState } from 'react'
import './Navbar.css'; 

import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {


  const [signalId ,setSignalId]=useState(0)
  const handleChange=(e)=>{
    setSignalId(parseInt(e.target.value));
  }

  const startSignal= async ()=>{
    const response = await fetch(`https://greenroad-gr.onrender.com/app/p1/on-signal/${signalId}`, {
        method: 'GET',
      });
      if(response.ok)
      {
      alert(`SignalID ${signalId} start`);
      }
      else{
        alert(`wrong signalid or server error`)
      }
  }

  const stopSignal= async ()=>{
    const response = await fetch(`https://greenroad-gr.onrender.com/app/p1/off-signal/${signalId}`, {
        method: 'GET',
      });
      if(response.ok)
      {
      alert(`SignalID ${signalId} stop`);
      }
      else{
        alert(`wrong signalid or server error`)
      }
  }
  return (
    <>

   <nav className="main-nav">
    <div className="hamburger-menu">
<a href="/abc">
  <GiHamburgerMenu/>
</a>
    </div>
    <div className="logo">
      
 <h2>
  Hello,User
 </h2>
    </div>
<div className="menu-link">
  <ul>
    <li>
      <a href="/">Add Circle</a>
    </li>
    <li>
    <input type='number' onChange={handleChange} placeholder='circle id' className='mr-32 rounded-md h-8 text-2xl font-semibold'></input>
    <button className='bg-white w-32 rounded-md font-semibold text-2xl mr-32' onClick={startSignal}>Start</button>
    <button className='bg-white w-32 rounded-md font-semibold text-2xl' onClick={stopSignal}>Stop</button>
    </li>
  </ul>
</div>
   </nav>
 
    </>
  )
}

export default Navbar
