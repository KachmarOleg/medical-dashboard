import LevelChecker from "../LevelChecker/LevelChecker";
import classes from "./VitalCard.module.scss";

export default function VitalCard({
  activePatient,
  type,
  cardColor,
  vitalUnit,
  icon,
}) {
  const diagnosticType = activePatient
    ? activePatient.diagnosis_history[0][type]
    : null;

  const cardTitle = type
    .replaceAll("_", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div
      className={`${classes.vitalCard} flex_column`}
      style={{ background: cardColor }}
    >
      <figure className={classes.vitalIcon}>
        <img src={icon} alt={`${cardTitle} icon`} width={96} height={96} />
      </figure>

      <p className="text_regular">{cardTitle}</p>

      <p className={classes.vitalValue}>
        {activePatient ? `${diagnosticType.value} ${vitalUnit}` : "N/A"}
      </p>

      <LevelChecker
        diagnosticType={diagnosticType}
        activePatient={activePatient}
      />
    </div>
  );
}
