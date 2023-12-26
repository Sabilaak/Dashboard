import React, { useState } from 'react'
import './Sidebar.css'
import { SidebarData } from '../../Data/Data';
import { FaGreaterThan } from "react-icons/fa";
import logoone from '../../Images/logoone.jpg';
import { IoMdPower } from "react-icons/io";
const Sidebar = () => {
  const [select, setSelect] = useState(0);
  return (
    <div>
      <div className='Sidebar'>
        {/*Profile area*/}
        <div className='profile'>
          <img src={logoone} alt="" className='imgone' width="140px" height="70px" />
          <p><strong>Ram Mohan</strong><FaGreaterThan style={{ color: 'blue' }} /></p>
          <p className='gamil_text '>rammohan2@gmail.com</p>
        </div>
        <div className='menu'>
          {SidebarData.map((item, index) => {
            return (
              <div
                className={select === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelect(index)}
              >
                <item.icon className='icon' />
                <span>{item.heading}</span>
              </div>
            )
          })}
          <div className='logout'>
                 Logout <span><IoMdPower /></span>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
