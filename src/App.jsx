import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import CVHeader from "./components/CVHeader";
import "./styles/styles.css";
import CVEducation from "./components/CVEducation";
import EducationInfo from "./components/EducationInfo";
import { nanoid } from "nanoid";
import { MdDelete } from "react-icons/md";

export default function App() {
  const [eduIsOpen, setEduIsOpen] = React.useState(false);
  const [addEduDetails, setAddEduDetails] = React.useState(false);

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
    },
    {
      id: nanoid(),
      school: "Moonliaaaght University",
      degree: "Bachelor of Arts in Creative Media and Film",
      startdate: "05/2020",
      enddate: "08/2024",
      location: "Dream City, USA",
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
                    <MdDelete onClick={() => deleteUni(edu.id)} />
                  </div>
                ))}
              </>
            }
          ></EducationInfo>
        </div>
        <div className="cv-section">
          <CVHeader
            name={personalDetails.fullName}
            email={personalDetails.email}
            phone={personalDetails.phone}
            address={personalDetails.address}
          ></CVHeader>
        </div>
      </div>
    </>
  );
}
