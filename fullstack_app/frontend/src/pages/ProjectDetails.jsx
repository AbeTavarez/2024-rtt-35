import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import PropTypes from "prop-types";
import CreateTaskForm from "../components/CreateTaskForm";

export default function ProjectDetails({ projects, setProjects }) {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const [project, setProject] = useState(null);
  const [updateFormData, setUpdateFormData] = useState({});
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch(
        `http://localhost:4000/api/projects/${params.id}`,
      );
      const data = await res.json();
      console.log(data);

      setProject(data.project); // current project
      setUpdateFormData(data.project); // form data for updating the project
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
      setProjects((prevProject) =>
        prevProject.filter((p) => p._id !== params.id),
      );
      navigate("/projects");
    }
  };

  const handleChange = (e) => {
    setUpdateFormData({
      ...updateFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // makes PUT request to update project by the id
      const res = await fetch(
        `http://localhost:4000/api/projects/${params.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          body: JSON.stringify(updateFormData),
        },
      );

      // we get back the updatedProject
      const data = await res.json();
      console.log(data);

      // update the current project state
      setProject(data.updatedProject);

      // updating the projects array
      const updatedProjects = projects.map((p) => {
        if (p._id === params.id) {
          return data.updatedProject;
        } else {
          return p;
        }
      });

      console.log(updatedProjects);
      setProjects(updatedProjects);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h1>{project?.name}</h1>

      <p>{project?.description}</p>

      <div>
        <button onClick={handleDelete}>
          Delete <MdOutlineDelete size={24} />
        </button>

        <button onClick={() => setShowUpdateForm(!showUpdateForm)}>
          Update <FaPencil size={24} />
        </button>
      </div>

      <div>
        {showUpdateForm && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Project Name:
              <input
                type="text"
                name="name"
                value={updateFormData.name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="description">
              Project Description:
              <input
                type="text"
                name="description"
                value={updateFormData.description}
                onChange={handleChange}
              />
            </label>

            <input type="submit" value="Save" />
          </form>
        )}
      </div>

      <div>
        <h2>Tasks</h2>
        <CreateTaskForm
          projectId={params.id}
          setProject={setProject}
          project={project}
        />

        {project?.tasks.map((task) => (
          <div key={task._id}>
            <h3>Title: {task.title}</h3>
            <p>Description: {task.description}</p>
            <p>Status: {task.completed ? "Completed" : "In Progress"}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

ProjectDetails.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func,
};
