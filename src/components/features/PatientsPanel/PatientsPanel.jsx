import { useState, useEffect } from "react";
import classes from "./PatientsPanel.module.scss";
import UserInfo from "../UserInfo/UserInfo";

export default function PatientsPanel({
  patients,
  activePatient,
  setActivePatient,
}) {
  return (
    <aside className={`${classes.patientsPanel} pagePanel`}>
      <div className={`${classes.patientsHeader} flex_between`}>
        <h2>Patients</h2>
        <figure>
          <img
            src="/images/search.svg"
            alt="Search icon"
            width={18}
            height={18}
          />
        </figure>
      </div>

      <div className={classes.patientsList}>
        {patients.map((patient) => (
          <UserInfo
            key={patient.name}
            onClick={() => setActivePatient(patient.name)}
            userPic={patient.profile_picture}
            name={patient.name}
            subtitle={`${patient.gender}, ${patient.age}`}
            is_active={patient.name === activePatient.name ? true : false}
          />
        ))}
      </div>
    </aside>
  );
}
