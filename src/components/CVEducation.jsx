export default function CVEducation(props) {
  return (
    <div className="cv-second-part">
      <div>
        <p className="cv-second-part-title">Education</p>
      </div>
      <div className="cv-edu-details">
      {props.eduDetails.map((item, index) => (
          <div className="cv-edu-item" key={index}>
          <div className="cv-edu-details-first">
            <p>{item.startdate + " - " + item.enddate}</p>
            <p>{item.location}</p>
          </div>
          <div className="cv-edu-details-second">
          <p style={{fontWeight:"600"}}>{item.school}</p>
          <p>{item.degree}</p>
          </div>
          </div>
      ))}
       </div>
    </div>
  );
}
