import React from "react";
import "./css/Company.css";
import Company from "./Company";
import BMC from "./images/BMC.png";

const Companies = () => {
  return (
    <div className="company_container">
    <div className="company_intro">
        <h1>Referanslarımız</h1>
        <p>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</p>
    </div>
      <div className="container_c">
        <div className="companiesContainer">
          <div className="companySubContainer">
            <Company imagePath={BMC} companyTitle="Title" />
          </div>
          <div className="companySubContainer">
            <Company imagePath={BMC} companyTitle="Title" />
            <Company imagePath={BMC} companyTitle="Title" />
          </div>
          <div className="companySubContainer">
            <Company imagePath={BMC} companyTitle="Title" />
            <Company imagePath={BMC} companyTitle="Title" />
            <Company imagePath={BMC} companyTitle="Title" />
          </div>
          <div className="companySubContainer">
            <Company imagePath={BMC} companyTitle="Title" />
            <Company imagePath={BMC} companyTitle="Title" />
          </div>
          <div className="companySubContainer">
            <Company imagePath={BMC} companyTitle="Title" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
