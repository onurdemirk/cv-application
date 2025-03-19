import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa6";

export default function CVHeader(props) {
  return (
    <div className="cv-header">
      <div>
        <h2>{props.name}</h2>
      </div>
      <div className="cv-header-details">
        <div className="header-details">
          <TfiEmail className="header-button" /> <p>{props.email}</p>
        </div>
        <div className="header-details">
        <FiPhone className="header-button" /> <p>{props.phone}</p>
        </div>
        <div className="header-details">
        <FaRegAddressCard className="header-button" /><p>{props.address}</p>
        </div>
      </div>
    </div>
  );
}
