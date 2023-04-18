import { useState, useEffect } from "react";

export default function EducationData() {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const getEducations = async () => {
      let response = await fetch(
        "http://laravel.gaheekate.online/api/educations"
      );
      let data = await response.json();
      setEducations(data);
    }
    getEducations();
  }, []);


  return (
    <div >
      <h2 className="ui header">
        <i className="graduation cap icon"></i>
        <div className="content">
          Education list
        </div>
      </h2>
      <div>
        {educations.map((education) => (
          <div className="content" style={{ marginBottom: "1em" }} key={education.id}>
            <div className="ui stacked segment" style={{ padding: "1em" }}>
              <h3 className="ui dividing header">{education.school}</h3>
              <p >{education.type}</p>
              <p style={{ fontStyle: "italic" }}>{education.course}</p>
              <p>{new Date(education.started).toLocaleDateString()} ~ {new Date(education.finished).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}