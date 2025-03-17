import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import CVHeader from "./components/CVHeader";
import "./styles/styles.css";

export default function App() {
  const [personalDetails, setPersonalDetails] = React.useState({
    fullName: "Lysander Crowe",
    email: "lysander.crowe@xgmail.com",
    phone: "+1 (555) 987-6543",
    address: "789 Nightfall Lane, USA",
  });

  const changeFunction = (stateName) => (e) => {
    const { name, value } = e.target;
    stateName((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
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
