import { useState } from "react";
import "./RightSideBar.css";
import ProjectForm from "./ProjectForm";
import image from "../Assets/proj.jpg";
const RightSideBar = (props) => {
  const [openForm, setOpenForm] = useState(false);
  const formHandler = () => {
    setOpenForm(true);
  };
  var check=false;
  if(props.formOpener || openForm){
      check=true;
  }
  return (
    <>
      {check && <ProjectForm />}
      {!check && (
        <div className="right_container">
          <div>
            <img id="image" src={image} alt="new project symbol"></img>
          </div>
          <h3>No Project Selected</h3>
          <p className="front_description">
            select a project or get started with a new one{" "}
          </p>

          <button onClick={formHandler} className="project_button">
            Create new project
          </button>
        </div>
      )}
    </>
  );
};
export default RightSideBar;
