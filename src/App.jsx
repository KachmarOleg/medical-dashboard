import { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./components/layout/Header/Header";
import PatientsPanel from "./components/features/PatientsPanel/PatientsPanel";

function App() {
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

  // console.log(patients);

  const JesTeylorData = patients.filter(
    (patient) => patient.name === "Jessica Taylor",
  );

  console.log(JesTeylorData);

  return (
    <>
      <Header />

      <div className="container">
        <PatientsPanel />

        <main className="pagePanel">
          <section className="pagePanel">section 1</section>
          <section className="pagePanel">section 2</section>
        </main>

        <aside className="pagePanel">aside 2</aside>
      </div>
    </>
  );
}

export default App;
