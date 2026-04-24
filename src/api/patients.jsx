const username = "coalition";
const password = "skills-test";
const auth = btoa(`${username}:${password}`);

export async function getPatients() {
  const patientsResponse = await fetch(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    },
  );

  if (!patientsResponse.ok) {
    throw new Error("Failed to fetch patients");
  }

  const patientsJSON = await patientsResponse.json();

  return patientsJSON;
}
