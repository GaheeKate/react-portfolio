import { useState, useEffect } from "react";

export default function SkillData() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkills = async () => {
      let response = await fetch(
        "http://laravel.gaheekate.online/api/skills"
      );
      let data = await response.json();
      setSkills(data);
    }
    getSkills();
  }, []);

  return (
    <div>
      <h2 className="ui header">
        <i className="whmcs icon"></i>
        <div className="content">
          Skill list
        </div>
      </h2>
      <ul style={{ marginBottom: "50px" }}>
        {skills.map((skill) => (
          <a className="ui image label">
            <img style={{ width: "50px" }} src={'http://laravel.gaheekate.online/storage/' + skill.image} />
            {skill.title}
          </a>

        ))}
      </ul>



      <div class="ui segment">
        {skills.map((skill) => (
          <div className="ui active progress" >
            <div className="bar" style={{ 'width': skill.type + '%' }}>
              <div className="progress"  >{skill.type}%</div>
            </div>
            <div className="label">{skill.title}</div>
          </div>
        ))}
      </div>

    </div >

















  );
}