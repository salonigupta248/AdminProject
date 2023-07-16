import React, { useEffect } from 'react'
import "./Form.scss"
import ClearIcon from '@mui/icons-material/Clear';

/*This is made for the better functionality of modal so that the scrollbar hides*/
const Form = ({closeModal}) => {
  useEffect (()=>{
    document.body.style.overflowY = "hidden";
    return () =>{
    }
  },[])
  return (
   <>
    <div className="form-wrapper" onClick={closeModal} ></div>
    <div className='form-container' style={{animation:"droptop .2s ease"}} >
        <h1>Create new assessment</h1>
        <hr />
      <form action="">
        <label htmlFor="Name">Name of assessment</label>

        <input type="text" placeholder='Type Here' />
<label htmlFor="purpose">Purpose of the test is</label>
<select id="purpose" name="purpose">
<option value="job">select</option>
</select>
<label htmlFor="purpose">Description</label>

<select id="description" name="description">
  <option value="job">select</option>
</select> 
<label htmlFor="Skills">Skills</label>

<div className="skills-box">
  <div className="skills-top">
<button className='form-button'>UI/UX and Design <ClearIcon/></button>
<button className='form-button'>No of Questions <ClearIcon/></button>
<button className='form-button'>Web Development <ClearIcon/></button> <br />
<button className='form-button'>UI/UX and Design <ClearIcon/></button>
<button className='form-button'>Web Development <ClearIcon/></button>
  </div>
  <hr />
  <div className="skills-bottom">
<input type="text" placeholder='Type here' />
  </div>
</div>
<label htmlFor="Duration">
Duration of Assessment</label>
 <input type="text"placeholder='HH:MM:SS' />

<div className="save-box">
  <button onClick={closeModal} className='save'>Save</button>
</div>
</form>
    </div>
   </>
  )
}

export default Form
