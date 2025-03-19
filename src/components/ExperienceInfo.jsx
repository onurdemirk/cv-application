import React from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { nanoid } from "nanoid";

export default function ExperienceInfo(props) {
  const onSubmit = (setExpDetails) => (e) => {
    e.preventDefault();

    const values = e.target;

    const obj = {
      id: nanoid(),
      companyName: values.companyName.value,
      position: values.position.value,
      startdate: values.startdate.value,
      enddate: values.enddate.value,
      location: values.location.value,
      description: values.description.value,
    };
    setExpDetails((prevItems) => [...prevItems, obj]);
    e.target.reset();
    props.changeAddExpDetails();
  };

  return (
    <div className="experience-info">
      <div className="exp-title">
        <p>Experience</p>
        {props.expIsOpen ? (
          <IoIosArrowDropupCircle
            onClick={props.changeExpIsOpen}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <IoIosArrowDropdownCircle
            onClick={props.changeExpIsOpen}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      {props.expIsOpen && !props.addExpDetails ? (
        <div>
          {props.compName}
          <div className="addexp-button">
            <IoIosAddCircle
              onClick={props.changeAddExpDetails}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      ) : null}
      {props.expIsOpen && props.addExpDetails ? (
        <div>
          <form class="add-exp-form" onSubmit={onSubmit(props.setExpDetails)}>
            <label htmlFor="companyName">Company Name</label>
            <input type="text" id="companyName" name="companyName" />
            <label htmlFor="position">Position Title</label>
            <input type="text" id="position" name="position" />
            <label htmlFor="startdate">Start Date</label>
            <input type="text" id="startdate" name="startdate" />
            <label htmlFor="enddate">End Date</label>
            <input type="text" id="enddate" name="enddate" />
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" />
            <label htmlFor="descripton">Description</label>
            <input type="text" id="description" name="description" />
            <div className="buttons">
              <button
                type="submit"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <FaSave className="icons" />
              </button>
              <button
                type="button"
                onClick={props.changeAddExpDetails}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <MdCancel className="icons" />
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}
