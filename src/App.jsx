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
import VitalCards from "./components/features/VitalCards/VitalCards";

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
            <VitalCards activePatient={activePatient} />
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
