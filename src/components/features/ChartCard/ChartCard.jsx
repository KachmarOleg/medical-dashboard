import LatestPressureCard from "../LatestPressureCard/LatestPressureCard";
import LevelChecker from "../LevelChecker/LevelChecker";
import classes from "./ChartCard.module.scss";

export default function ChartCard({ activePatient }) {
  console.log(activePatient);
  return (
    <div className={classes.chartCard}>
      <p>Chart goes here</p>

      {activePatient && <LatestPressureCard activePatient={activePatient} />}
    </div>
  );
}
