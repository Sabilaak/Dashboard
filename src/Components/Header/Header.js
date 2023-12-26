import React from 'react'
import './Header.css'
import Logo from '../../Images/emblemone.jpg'
import logotwo from '../../Images/logotwo.jpg'
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  return (
    <div className='header_main'>
      <div className='header'>
        <div className='header_left'>
          <img src={logotwo} alt="" className='imagelogo' width="140px" height="70px" />
        </div>
        <div className='header_right'>
          <p className='pheader'><span><img src={Logo} style={{ width: '30px', height: '30px' }} /></span><strong>XYZ pvt.ltd</strong></p>
          <p className='arrow'><IoIosArrowDown /></p>
        </div>
      </div>
    </div>
  )
}
export default Header
