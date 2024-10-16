import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import PropTypes from "prop-types";


export default function ProjectDetails({setProjects}) {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch(
        `http://localhost:4000/api/projects/${params.id}`,
      );
      const data = await res.json();
      console.log(data);

      setProject(data.project);
    };
    fetchProject();
  }, [params.id]);

  if (!project) {
    return (
      <main>
        <h2>Project Not Found!</h2>
        <Link to="/projects">Go back to projects</Link>
      </main>
    );
  }

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:4000/api/projects/${params.id}`, {
      method: "DELETE",
    });

    console.log(res);

    if (res.ok) {
        setProjects(prevProject => prevProject.filter(p => p._id !== params.id))
        navigate('/projects');
    }
  };

  return (
    <main>
      <h1>{project?.name}</h1>

      <p>{project?.description}</p>

      <div>
        <h2>Tasks</h2>
        {project?.tasks.map((task) => (
          <div key={task._id}>
            <h3>Title: {task.title}</h3>
            <p>Description: {task.description}</p>
            <p>Status: {task.completed ? "Completed" : "In Progress"}</p>
          </div>
        ))}
      </div>

      <div>
        <button onClick={handleDelete}>
          Delete <MdOutlineDelete size={24} />
        </button>
      </div>
    </main>
  );
}

ProjectDetails.propTypes = {
    projects: PropTypes.array,
    setProjects: PropTypes.func,
  };