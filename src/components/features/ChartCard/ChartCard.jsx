import { Line } from "react-chartjs-2";
import LatestPressureCard from "../LatestPressureCard/LatestPressureCard";
import LevelChecker from "../LevelChecker/LevelChecker";
import classes from "./ChartCard.module.scss";
import LineChart from "../LineChart/LineChart";

export default function ChartCard({ activePatient }) {
  console.log(activePatient);
  return (
    <div className={`${classes.chartCard}`}>
      <LineChart activePatient={activePatient} />
      {activePatient && <LatestPressureCard activePatient={activePatient} />}
    </div>
  );
}
