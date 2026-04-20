import { useState, useEffect } from "react";
import "./styles/App.css";

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
      <button>Click</button>
      <ul>
        {JesTeylorData.map((item) => (
          <li style={item.completed ? { color: "green" } : { color: "red" }}>
            : {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
