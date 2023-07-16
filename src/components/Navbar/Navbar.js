import React from 'react'
import "./Navbar.scss"
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
const Navbar = () => {
  return (
    <>
    <div className="navbar">
    
    <div className='navbars'>
      <h1>Assessment</h1>
      <div className="vl"></div>
      <h4>My Assessment</h4>
    </div>
    <div className="mobile">
<StayCurrentPortraitIcon className='mobile'/>
    </div>
    </div></>
  )
}

export default Navbar
