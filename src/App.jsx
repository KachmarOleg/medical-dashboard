import { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./components/layout/Header/Header";
import PatientsPanel from "./components/features/PatientsPanel/PatientsPanel";
import PatientCard from "./components/features/PatientCard/PatientCard";

function App() {
  const [patients, setPatients] = useState([]);
  const [activePatient, setActivePatient] = useState(false);

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
      console.log(patientsJSON);
    }

    getPatients();
  }, []);

  function handlePatientClick(patientName) {
    setActivePatient(patients.find((patient) => patient.name === patientName));
  }

  return (
    <>
      <Header />

      <div className="container">
        <PatientsPanel
          patients={patients}
          activePatient={activePatient}
          setActivePatient={handlePatientClick}
        />

        <main className="pagePanel">
          <section className="pagePanel">section 1</section>
          <section className="pagePanel">section 2</section>
        </main>

        <aside>
          <PatientCard activePatient={activePatient} />
          <div className="pagePanel"></div>
        </aside>
      </div>
    </>
  );
}

export default App;
