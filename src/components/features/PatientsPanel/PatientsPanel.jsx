import { useState, useEffect } from "react";
import classes from "./PatientsPanel.module.scss";
import UserInfo from "../UserInfo/UserInfo";

export default function PatientsPanel() {
  const [patients, setPatients] = useState([]);

  let username = "coalition";
  let password = "skills-test";
  let auth = btoa(`${username}:${password}`);

  useEffect(() => {
    async function getPatients() {
      const patientsResponse = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        },
      );
      const patientsJSON = await patientsResponse.json();
      setPatients(patientsJSON);
    }

    getPatients();
  }, []);

  console.log(patients);

  const JesTeylorData = patients.filter(
    (patient) => patient.name === "Jessica Taylor",
  );

  console.log(JesTeylorData);

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
          <a href="#">
            <UserInfo
              userPic={patient.profile_picture}
              name={patient.name}
              subtitle={`${patient.gender}, ${patient.age}`}
              is_active={patient.name === "Jessica Taylor" ? true : false}
            />
          </a>
        ))}
      </div>
    </aside>
  );
}
