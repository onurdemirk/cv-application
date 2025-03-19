import React from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { LiaUniversitySolid } from "react-icons/lia";
import { nanoid } from "nanoid";

export default function EducationInfo(props) {
  const onSubmit = (setEduDetails) => (e) => {
    e.preventDefault();

    const values = e.target;

    const obj = {
      id: nanoid(),
      school: values.school.value,
      degree: values.degree.value,
      startdate: values.startdate.value,
      enddate: values.enddate.value,
      location: values.location.value,
    };
    setEduDetails((prevItems) => [...prevItems, obj]);
    e.target.reset();
    props.changeAddEduDetails();
  };

  return (
    <div className="education-info">
      <div className="edu-title">
      <div className="left-block-titles"><LiaUniversitySolid /><p>Education</p></div>
        {props.eduIsOpen ? (
          <IoIosArrowDropupCircle
            onClick={props.changeEduIsOpen}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <IoIosArrowDropdownCircle
            onClick={props.changeEduIsOpen}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      {props.eduIsOpen && !props.addEduDetails ? (
        <div>
          {props.uniName}
          <div className="addschool-button">
            <IoIosAddCircle
              onClick={props.changeAddEduDetails}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      ) : null}
      {props.eduIsOpen && props.addEduDetails ? (
        <div>
          <form
            class="add-school-form"
            onSubmit={onSubmit(props.setEduDetails)}
          >
            <label htmlFor="school">School</label>
            <input type="text" id="school" name="school" />
            <label htmlFor="degree">Degree</label>
            <input type="text" id="degree" name="degree" />
            <label htmlFor="start-date">Start Date</label>
            <input type="text" id="start-date" name="startdate" />
            <label htmlFor="end-date">End Date</label>
            <input type="text" id="end-date" name="enddate" />
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" />
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
                onClick={props.changeAddEduDetails}
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
