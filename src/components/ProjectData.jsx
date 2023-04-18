import { useState, useEffect } from "react";

export default function ProjectData() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      let response = await fetch(
        "http://laravel.gaheekate.online/api/projects"
      );
      let data = await response.json();
      setProjects(data);
    }
    getProjects();
  }, []);

  return (
    <div>
      <h2 class="ui header">
        <i class="pencil alternate icon"></i>
        <div class="content">
          Project list
        </div>
      </h2>
      <div class="ui divided items">
        {projects.map((project) => (
          <div class="item" key={project.id}>
            <div class="image">
              <img src={project.image} alt={project.title} />
            </div>
            <div class="content">
              <div class="header">{project.title}</div>
              <div class="meta">
                <span class="cinema">{project.slug}</span>
              </div>
              <div class="description">
                <p>{project.content}</p>
              </div>
              <div class="extra">
                <a href={project.url}>
                  <div class="ui right floated button">
                    View Demo
                    <i class="right chevron icon"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>





    </div>
  );
}