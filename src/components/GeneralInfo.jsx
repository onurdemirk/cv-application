import React from "react";

export default function GeneralInfo(props) {
  return (
    <div className="general-info">
      <p className="title">Personal Details</p>
      <label htmlFor="fullname">Full name</label>
      <input
        type="text"
        id="fullname"
        name="fullName"
        value={props.name}
        onChange={props.onChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={props.email}
        onChange={props.onChange}
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={props.phone}
        onChange={props.onChange}
      />
      <label htmlFor="address">Adress</label>
      <input
        type="text"
        id="address"
        name="address"
        value={props.address}
        onChange={props.onChange}
      />
    </div>
  );
}
