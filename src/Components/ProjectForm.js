import { useState } from 'react';
import './ProjectForm.css';
const ProjectForm = () => {
    const[cancel,setCancel]=useState(false);
    const cancelHandler=()=>{
        setCancel(true);
    }
  return (
    <>
    
    <form> 
        <div className="buttons">
            <button onClick={cancelHandler} id="cancel">Cancel</button>
            <button id="save">Save</button>
        </div>
      <div className='title'>
        {" "}
        <label>TITLE</label>
        <input id="text" type="title" />
      </div>
      <div className='description'>
        <label>DESCRIPTION</label>
        <input id="text_d"type="text"></input>
      </div>
      <div className='date'>
        <label>DUE DATE</label>
        <input id="text" type="datetime-local"></input>
      </div>
    </form>
    </>
  );
};
export default ProjectForm;
