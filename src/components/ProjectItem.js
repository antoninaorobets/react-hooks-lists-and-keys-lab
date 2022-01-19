import React from "react";

function ProjectItem({ name, about, technologies }) {

  const techElems = technologies.map((tec)=>{return <span key={tec}>{tec}</span>})
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techElems}
      </div>
    </div>
  );
}

export default ProjectItem;
