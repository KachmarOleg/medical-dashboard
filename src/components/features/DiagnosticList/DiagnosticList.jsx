import classes from "./DiagnosticList.module.scss";

export default function DiagnosticList({ activePatient }) {
  return (
    <section className={`${classes.diagnosticList} pagePanel`}>
      <h2>Diagnostic List</h2>

      {activePatient && (
        <div className={classes.diagnosticTable}>
          <div className={`${classes.tHead} ${classes.tContainer}`}>
            <span className="text_emphasized">Problem/Diagnosis</span>
            <span className="text_emphasized">Description</span>
            <span className="text_emphasized">Status</span>
          </div>
          <div className={classes.tBody}>
            {activePatient.diagnostic_list.map((diagnosis, index) => (
              <div
                key={index}
                className={`${classes.tRow} ${classes.tContainer}`}
              >
                <span className="text_regular">{diagnosis.name}</span>
                <span className="text_regular">{diagnosis.description}</span>
                <span className="text_regular">{diagnosis.status}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
