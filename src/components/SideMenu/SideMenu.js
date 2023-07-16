import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import "./SideMenu.scss"
const SideMenu = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <div className="box">

          <DashboardIcon className='icons'/>
          <p>Dashboard</p>
      
        </div>
        <div className="box active-box">
          <AssessmentIcon className='icons'/>
          <p>Assessment</p>

        </div>
        <div className="box">
          <CollectionsBookmarkIcon className='icons'/>
          <p>My Library</p>
        </div>
        
        <div className="bottom">
        <hr />
          <button>Admin</button>
          <div className="box">
            <MarkunreadMailboxIcon className='icons'/>
            <p>Round <br />Status</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideMenu
