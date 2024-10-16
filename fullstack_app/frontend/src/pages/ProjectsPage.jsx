import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProjectsPage({ projects, setProjects }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // make POST request to create new project
      const res = await fetch("http://localhost:4000/api/projects/", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      });

      // parse data to json
      const data = await res.json();

      // {
      //   project: {

      //   }
      // }
      console.log(data.project);

      // adding the new created project to the projects array
      setProjects([data.project, ...projects]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Projects Page</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Project Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="description">
            Project Description:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>

          <input type="submit" value="Create Project" />
        </form>
      </div>

      <div>
        {projects &&
          projects.map((project) => (
            <Link key={project._id} to={`/projects/${project._id}`}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </Link>
          ))}
      </div>
    </>
  );
}

// https://www.npmjs.com/package/prop-types
ProjectsPage.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func,
};
