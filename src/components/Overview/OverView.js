import AssessmentIcon from '@mui/icons-material/Assessment';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import LanguageIcon from '@mui/icons-material/Language';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import "./OverView.scss"
const OverView = () => {
  return (
    <>
      <h3 style={{"marginLeft":"2rem"}}>Assessment Overview</h3>
    <div className='container'>
      <div className="box">
<ul>
    <li className='list'>
<h5>Total Assesment</h5>
<div className="list-container">
<div className="content">
<p><AssessmentIcon  className="icon-edit"/></p>
</div>
<div className="inner_content">
<div className="info-1">
    <h3 style={{"marginTop":"22px"}}>34</h3>
    </div>   
</div>
</div>
    </li>
<li>    <div className="vl-large"></div>
</li>    <li className='list'>
<h5>Candidates</h5>
<div className="list-container">
<div className="content">
<p><PeopleOutlineIcon className="icon-edit profile"/></p>
</div>
<div className="inner_content">
    <div className="info-1">
        <h3>11,145</h3>
        <p>+89</p>
    </div>
    <div className="info-2">
    <h5>Total Candidate</h5>
    </div>
</div>
<div className="vls"></div>  
<div className="inner_content">
<div className="info-1">
        <h3>1,14</h3>
        <p>+89</p>
    </div>
    <div className="info-2">
        <h5>Who Attempted</h5>
    </div>
</div> 
</div>

    </li>
<li>    <div className="vl-large"></div>

</li>
<li className='list'>
<h5>Candidates Source</h5>
<div className="list-container">

<div className="content">
<p><LanguageIcon className=" source"/></p>
</div>

<div className="inner_content">
    <div className="info-1">
        <h3>11,000</h3>
        <p>+89</p>
    </div>
    <div className="info-2">
    <h5>E-mail</h5>
</div>
</div>
<div className="vls"></div>  
<div className="inner_content">
<div className="info-1">
        <h3>145</h3>
        <p>+89</p>
    </div>
    <div className="info-2">
        <h5>Social Share</h5>
    </div>
    </div> 
    <div className="vls"></div>  

    <div className="inner_content">
<div className="info-1">
        <h3>145</h3>
        <p>+89</p>
    </div>
    <div className="info-2">
        <h5>Unique Link</h5>
    </div>
    </div> 
    </div>

    </li>
   <li> <div className="vl-large"></div></li>

   <li className='list'>
<h5>Total Purpose</h5>
<div className="list-container">
<div className="content">
<p><InsertLinkIcon  className=" purpose"/></p>
</div>
    <div className="inner_content">
<div className="info-1">
    <h3 style={{"marginTop":"22px"}}>11</h3>
    </div>
</div>
</div>
    </li>
</ul>
      </div>
    </div>
    </>
  )
}
export default OverView
