import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./Widgets.scss"
const Widgets = () => {
  return (
    <div className='widget'>
      <div className="tops">
<BusinessCenterIcon className='bus-icon'/>
<MoreVertIcon/>
      </div>
      <h3>Math Assessment</h3>
      <div className="center">
        <div className="lcenter">
          <h5>Job</h5>
        </div>
        <div class="vl"></div>
        <div className="rcenter">
          <CalendarMonthIcon/>
          <p>20 Apr 2023</p>
        </div>
      </div>
      <hr />
      <div className="bottoms">
        <div className="lefts">
          <div className="inner-left">
            <h5>00</h5>
            <h5>Duration</h5>
          </div>
          <div className="inner-left">
            <h5>00</h5>
            <h5>Duration</h5>
          </div>
        </div>
        <div className="rights">
          <button className='share'><AttachFileIcon/>Share</button>
          <button className='logo'>LP</button>
        </div>

      </div>
    </div>
  )
}

export default Widgets
