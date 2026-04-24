import MainMenu from "./MainMenu/MainMenu";
import classes from "./Header.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import CompanyLogo from "../../ui/CompanyLogo/CompanyLogo";

// import UserItem from "../../ui/userItem/UserItem";

export default function Header() {
  return (
    <header>
      <div className={`${classes.headerContainer}`}>
        <CompanyLogo logoClass="" />

        <MainMenu />

        <ProfileInfo
          userPic="/images/doctor.png"
          name="Dr. Jose Simmons"
          subtitle="General Practitioner"
        />
      </div>
    </header>
  );
}
