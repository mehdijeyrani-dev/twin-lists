import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { slug } = useParams();
  return <div>Project: {slug}</div>;
};

export default ProjectDetails;
