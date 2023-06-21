import React from "react";
import styles from "./css/Company.css";

const Company = ({ imagePath, companyTitle }) => {
  return (
    <div className={styles.companyContainer} title={companyTitle}>
      <img src={imagePath} alt={companyTitle} />
    </div>
  );
};

export default Company;
