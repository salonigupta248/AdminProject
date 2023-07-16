import React, { useState } from 'react'
import Form from '../Form/Form';
import "./Assessment.scss"
import AddIcon from '@mui/icons-material/Add';
const Assessment = () => {
 const [showModal, setShowModal] =  useState(false);
 const closeModal = () => setShowModal(false);
  return (
    <div className='assessment'>
      <AddIcon className='add-icon' onClick={()=> setShowModal(true)}/>
        {showModal && <Form closeModal={closeModal}/>}
      <h3>New Assessment</h3>
      <p>From here you can add questions of multiple types like <br />
      MCQs, subjective (text or paragraph)!</p>
    </div>
  )
}

export default Assessment
