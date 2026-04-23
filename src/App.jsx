import { useState, useEffect } from "react";
import Header from "./components/layout/Header/Header";
import PatientsPanel from "./components/features/PatientsPanel/PatientsPanel";
import PatientCard from "./components/features/PatientCard/PatientCard";
import LabResults from "./components/features/LabResults/LabResults";
import DiagnosticList from "./components/features/DiagnosticList/DiagnosticList";
import VitalCard from "./components/features/VitalCard/VitalCard";
import ChartCard from "./components/features/ChartCard/ChartCard";

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

        <main>
          <section className="pagePanel">
            <h2>Diagnosis History</h2>
            <ChartCard activePatient={activePatient} />
            <div className="flex_between gap20">
              <VitalCard
                activePatient={activePatient}
                type="respiratory_rate"
                cardColor="#E0F3FA"
                vitalUnit="bpm"
                icon="/images/respiratory-rate.svg"
              />
              <VitalCard
                activePatient={activePatient}
                type="temperature"
                cardColor="#FFE6E9"
                vitalUnit="°F"
                icon="/images/temperature.svg"
              />
              <VitalCard
                activePatient={activePatient}
                type="heart_rate"
                cardColor="#FFE6F1"
                vitalUnit="bpm"
                icon="/images/heart-rate.svg"
              />
            </div>
          </section>

          <DiagnosticList activePatient={activePatient} />
        </main>

        <aside>
          <PatientCard activePatient={activePatient} />
          <LabResults activePatient={activePatient} />
        </aside>
      </div>
    </>
  );
}

export default App;
