import classes from "./LatestPressureCard.module.scss";
import LevelChecker from "../LevelChecker/LevelChecker";

export default function LatestPressureCard({ activePatient }) {
  return (
    <div className={classes.pressureLatest}>
      <div className={classes.pressureItem}>
        <div className="flex_start gap4">
          <div className={`${classes.pressureIcon} ${classes.systolic}`}></div>
          Systolic
        </div>

        <p className={classes.pressureValue}>
          {
            activePatient?.diagnosis_history?.[0]?.blood_pressure?.systolic
              ?.value
          }
        </p>

        <LevelChecker
          activePatient={activePatient}
          diagnosticType={
            activePatient?.diagnosis_history?.[0]?.blood_pressure?.systolic
          }
        />
      </div>

      <div className={classes.pressureItem}>
        <div className="flex_start gap4">
          <div className={`${classes.pressureIcon} ${classes.diastolic}`}></div>
          Diastolic
        </div>

        <p className={classes.pressureValue}>
          {
            activePatient?.diagnosis_history?.[0]?.blood_pressure?.diastolic
              ?.value
          }
        </p>
        <LevelChecker
          activePatient={activePatient}
          diagnosticType={
            activePatient?.diagnosis_history?.[0]?.blood_pressure?.diastolic
          }
        />
      </div>
    </div>
  );
}
