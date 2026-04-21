import classes from "./LabResults.module.scss";

export default function LabResults({ activePatient }) {
  console.log(activePatient);
  return (
    <div className="pagePanel">
      <h2>Lab Results</h2>
      <div className={classes.labResultsContainer}>
        {activePatient
          ? activePatient.lab_results.map((result) => (
              <a
                href="#"
                className={`${classes.labResult} flex_between`}
                key={result}
              >
                <span className={`${classes.labResultText} text_regular`}>
                  {result}
                </span>
                <figure>
                  <img src="/images/download.svg" alt="Download icon" />
                </figure>
              </a>
            ))
          : ""}
      </div>
    </div>
  );
}
