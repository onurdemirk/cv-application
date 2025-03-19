import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import CVHeader from "./components/CVHeader";
import "./styles/styles.css";
import CVEducation from "./components/CVEducation";
import CVExperience from "./components/CVExperience";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import { nanoid } from "nanoid";
import { MdDelete } from "react-icons/md";

export default function App() {
  const [eduIsOpen, setEduIsOpen] = React.useState(false);
  const [addEduDetails, setAddEduDetails] = React.useState(false);

  const [expIsOpen, setExpIsOpen] = React.useState(false);
  const [addExpDetails, setAddExpDetails] = React.useState(false);

  const [personalDetails, setPersonalDetails] = React.useState({
    fullName: "Lysander Crowe",
    email: "lysander.crowe@xgmail.com",
    phone: "+1 (555) 987-6543",
    address: "789 Nightfall Lane, USA",
  });

  const [eduDetails, setEduDetails] = React.useState([
    {
      id: nanoid(),
      school: "Moonlight University",
      degree: "Bachelor of Arts in Creative Media and Film",
      startdate: "05/2020",
      enddate: "08/2024",
      location: "Dream City, USA",
    }
  ]);

  const [expDetails, setExpDetails] = React.useState([
    {
      id: nanoid(),
      companyName: "TechCorp Inc.",
      position: "Frontend Developer",
      startdate: "01/2019",
      enddate: "Present",
      location: "New York, USA",
      description:
        "Developed and maintained modern web applications using React and Redux.",
    },
    {
      id: nanoid(),
      companyName: "Innovate Solutions",
      position: "Software Engineer",
      startdate: "06/2016",
      enddate: "12/2018",
      location: "San Francisco, USA",
      description: "Designed and implemented robust APIs and backend services.",
    },
  ]);

  // this the function for the right icon of education text
  const changeEduIsOpen = () => {
    setEduIsOpen((prevDetails) => !prevDetails);
  };

  //  this is the function for the "PLUS" icon of education block
  const changeAddEduDetails = () => {
    setAddEduDetails((prevDetails) => !prevDetails);
  };

  // this the function for the right icon of experience text
  const changeExpIsOpen = () => {
    setExpIsOpen((prevDetails) => !prevDetails);
  };

  //  this is the function for the "PLUS" icon of experience block
  const changeAddExpDetails = () => {
    setAddExpDetails((prevDetails) => !prevDetails);
  };

  const changeFunction = (stateName) => (e) => {
    const { name, value } = e.target;
    stateName((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const deleteUni = (id) => {
    const updatedUni = eduDetails.filter((item) => item.id !== id);
    setEduDetails(updatedUni);
  };
  const deleteExp = (id) => {
    const updatedExp = expDetails.filter((item) => item.id !== id);
    setExpDetails(updatedExp);
  };

  return (
    <>
      <div className="container">
        <div>
          <GeneralInfo
            onChange={changeFunction(setPersonalDetails)}
            name={personalDetails.fullName}
            email={personalDetails.email}
            phone={personalDetails.phone}
            address={personalDetails.address}
          ></GeneralInfo>
          <EducationInfo
            changeEduIsOpen={changeEduIsOpen}
            changeAddEduDetails={changeAddEduDetails}
            addEduDetails={addEduDetails}
            eduIsOpen={eduIsOpen}
            setEduDetails={setEduDetails}
            uniName={
              <>
                {eduDetails.map((edu) => (
                  <div className="school-bar" key={edu.id}>
                    <p>{edu.school}</p>
                    <MdDelete
                      onClick={() => deleteUni(edu.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                ))}
              </>
            }
          ></EducationInfo>
          <ExperienceInfo
            changeExpIsOpen={changeExpIsOpen}
            changeAddExpDetails={changeAddExpDetails}
            expIsOpen={expIsOpen}
            addExpDetails={addExpDetails}
            setExpDetails={setExpDetails}
            compName={
              <>
                {expDetails.map((exp) => (
                  <div className="school-bar" key={exp.id}>
                    <p>{exp.companyName}</p>
                    <MdDelete
                      onClick={() => deleteExp(exp.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                ))}
              </>
            }
          ></ExperienceInfo>
        </div>
        <div className="cv-section">
          <CVHeader
            name={personalDetails.fullName}
            email={personalDetails.email}
            phone={personalDetails.phone}
            address={personalDetails.address}
          ></CVHeader>
          <CVEducation eduDetails={eduDetails}></CVEducation>
          <CVExperience expDetails={expDetails}></CVExperience>
        </div>
      </div>
    </>
  );
}
