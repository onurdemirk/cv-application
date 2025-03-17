import React from "react";

export default function CVHeader(props) {
  return (
    <div className="cv-header">
      <div>
        <h2>{props.name}</h2>
      </div>
      <div className="cv-header-details">
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.address}</p>
      </div>
    </div>
  );
}
