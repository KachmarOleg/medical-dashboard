import VitalCard from "../VitalCard/VitalCard";
import classes from "./VitalCards.module.scss";

export default function VitalCards({ activePatient }) {
  return (
    <div className={classes.vitalCards}>
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
  );
}
