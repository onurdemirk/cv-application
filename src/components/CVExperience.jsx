export default function CVExperience(props) {
  return (
    <div className="cv-second-part">
      <div>
        <p className="cv-second-part-title">Experience</p>
      </div>
      <div className="cv-exp-details">
        {props.expDetails.map((item) => (
          <div className="cv-exp-item" key={item.id}>
            <div className="cv-exp-date">
              <p>
                {item.startdate} - {item.enddate}
              </p>
              <p>{item.location}</p>
            </div>
            <div className="cv-exp-info">
              <h3>{item.companyName}</h3>
              <p className="position">{item.position}</p>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
