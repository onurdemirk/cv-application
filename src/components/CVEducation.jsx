export default function CVEducation(props) {
  return (
    <div className="cv-second-part">
      <div>
        <p className="cv-second-part-title">Education</p>
      </div>
      <div className="cv-edu-details">
        {props.eduDetails.map((edu) => (
          <div className="cv-edu-item" key={edu.id}>
            <div className="cv-edu-date">
              <p>
                {edu.startdate} - {edu.enddate}
                <p>{edu.location}</p>
              </p>
            </div>
            <div className="cv-edu-info">
              <h3>{edu.school}</h3>
              <p className="degree">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
