import React from 'react'
import "./Home.scss"
import Widgets from '../Widget/Widgets'
import Navbar from '../Navbar/Navbar'
import SideMenu from '../SideMenu/SideMenu'
import Assessment from '../Assessment/Assessment'
import OverView from '../Overview/OverView'
const Home = () => {
  return (
    <div className='home' style={{backgroundColor:"#F6F8FA"}}>
      <SideMenu/>
      <div className="homeContainer">
      <Navbar/>
      <OverView/>
      <div className="widgets">
        <Assessment/>
        <Widgets/>
        <Widgets/>
      </div>
      </div>
    </div>
  )
}

export default Home
