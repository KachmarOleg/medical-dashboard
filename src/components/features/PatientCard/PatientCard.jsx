import Avatar from "../../ui/Avatar/Avatar";
import CardInfoItem from "../CardInfoItem/CardInfoItem";
import classes from "./PatientCard.module.scss";

export default function PatientCard({ activePatient }) {
  return (
    <div className={`${classes.patientCard} pagePanel`}>
      <div className="flex_column_center">
        {activePatient && (
          <figure className={classes.patientImage}>
            <Avatar
              imgSrc={
                activePatient
                  ? activePatient.profile_picture
                  : "/images/patient-profile-pic.png"
              }
              width={200}
              height={200}
            />
          </figure>
        )}
        <h2 className={classes.patientName}>
          {activePatient ? activePatient.name : "Select a patient"}
        </h2>
      </div>

      <div className={`${classes.patientInfoItems} flex_column`}>
        <CardInfoItem
          icon="/images/calendar.svg"
          title="Date of Birth"
          value={
            activePatient.date_of_birth
              ? new Date(activePatient.date_of_birth).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  },
                )
              : ""
          }
        />

        <CardInfoItem
          icon={
            activePatient.gender === "Female"
              ? "/images/FemaleIcon.svg"
              : "/images/MaleIcon.svg"
          }
          title="Gender"
          value={activePatient.gender}
        />

        <CardInfoItem
          icon={"/images/PhoneIcon.svg"}
          title="Contact Info"
          value={activePatient.phone_number ? activePatient.phone_number : ""}
        />

        <CardInfoItem
          icon={"/images/PhoneIcon.svg"}
          title="Emergency Contacts"
          value={
            activePatient.emergency_contact
              ? activePatient.emergency_contact
              : ""
          }
        />

        <CardInfoItem
          icon={"/images/InsuranceIcon.svg"}
          title="Insurance Provider"
          value={
            activePatient.insurance_type ? activePatient.insurance_type : ""
          }
        />

        <button className={`${classes.showMoreBtn} text_emphasized`}>
          Show All Information
        </button>
      </div>
    </div>
  );
}
