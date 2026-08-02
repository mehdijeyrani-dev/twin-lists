import { Outlet } from "react-router-dom";

const ProjectsLayout = () => {
  return (
    <div>
      <h1>Projects</h1>
      <Outlet />
    </div>
  );
};

export default ProjectsLayout;
