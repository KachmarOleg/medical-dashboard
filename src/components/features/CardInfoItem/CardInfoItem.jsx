import classes from "./CardInfoItem.module.scss";

export default function CardInfoItem({ icon, title, value, activePatient }) {
  return (
    <div className={`${classes.patientInfoItem}`}>
      <figure className={`${classes.patientInfoIcon}`}>
        <img src={icon} alt={`${title} icon`} />
      </figure>
      <div className="flex_column">
        <span className="text_regular">{title}</span>
        <span className="text_emphasized">{value}</span>
      </div>
    </div>
  );
}
