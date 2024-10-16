import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProjectDetails() {
    const params = useParams();
    console.log(params);

    useEffect(() => {
        const fetchProject = async() => {
            const res = await fetch(`http://localhost:4000/api/projects/${params.id}`);
            const data = await res.json();
            console.log(data);
        }
        fetchProject()
    }, [params.id])
    
  return (
    <main>
      <h1>Project Details Page</h1>
    </main>
  );
}
