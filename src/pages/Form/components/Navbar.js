// import React, { useState } from 'react'
import './Navbar.css';

import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({getAllCircle}) => {

  // const [signalId, setSignalId] = useState(0)
  // const handleChange = (e) => {
  //   setSignalId(parseInt(e.target.value));
  // }

  // const startSignal = async () => {
  //   const response = await fetch(`https://greenroad-gr.onrender.com/app/p1/on-signal/${signalId}`, {
  //     method: 'GET',
  //   });
  //   if (response.ok) {
  //     alert(`SignalID ${signalId} start`);
  //   }
  //   else {
  //     alert(`wrong signalid or server error`)
  //   }
  // }

  // const stopSignal = async () => {
  //   const response = await fetch(`https://greenroad-gr.onrender.com/app/p1/off-signal/${signalId}`, {
  //     method: 'GET',
  //   });
  //   if (response.ok) {
  //     alert(`SignalID ${signalId} stop`);
  //   }
  //   else {
  //     alert(`wrong signalid or server error`)
  //   }
  // }

  

  return (
    <>

      <nav className="main-nav">
        <div className="hamburger-menu">
          <a href="/abc">
            <GiHamburgerMenu />
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
              <a href="/" className="font-semibold text-2xl">Add Circle</a>
            </li>
            <li>
             <a href="/allcircles" className="font-semibold text-2xl" onClick={getAllCircle}>All Circles</a>
             </li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Navbar
