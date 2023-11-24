import "./SideBar.css";
import RightSideBar from "./RightSideBar";
import { useState } from "react";
const SideBar = () => {
  const[formOpen,setFormOpen]=useState(false);
  const formOpenHandler=()=>{
    setFormOpen(true);
  }
  return (
    <>
      {" "}
      <div className="screen">
        <div className="outer_container">
          <div className="heading">YOUR PROJECTS</div>
          <button onClick={formOpenHandler} id="button">+ Add Project</button>

        </div>
        <RightSideBar formOpener={formOpen} />
       
      </div>
    </>
  );
};
export default SideBar;
