import { useState, useEffect } from "react";
import Header from "./components/layout/Header/Header";
import { getPatients } from "./api/patients";
import PatientsPanel from "./components/features/PatientsPanel/PatientsPanel";
import PatientCard from "./components/features/PatientCard/PatientCard";
import LabResults from "./components/features/LabResults/LabResults";
import DiagnosticList from "./components/features/DiagnosticList/DiagnosticList";
import VitalCard from "./components/features/VitalCard/VitalCard";
import ChartCard from "./components/features/ChartCard/ChartCard";
import { defaultUser } from "./data/defaultUser";

function App() {
  const [patients, setPatients] = useState([]);
  const [activePatient, setActivePatient] = useState(defaultUser);

  useEffect(() => {
    async function loadPatients() {
      const data = await getPatients();
      setPatients(data);
    }

    loadPatients();
  }, []);

  function handlePatientClick(patientName) {
    setActivePatient(patients.find((p) => p.name === patientName));
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
