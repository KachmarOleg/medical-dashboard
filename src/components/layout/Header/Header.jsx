import MainMenu from "./MainMenu/MainMenu";
import classes from "./Header.module.scss";
import UserInfo from "../../features/UserInfo/UserInfo";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// import UserItem from "../../ui/userItem/UserItem";

export default function Header() {
  return (
    <header className={classes.header}>
      <figure>
        <img
          src="/images/TestLogo.svg"
          alt="Company logo"
          width={210}
          height={48}
        />
      </figure>

      <MainMenu />
      <ProfileInfo
        userPic="/images/doctor.png"
        userPic2x="/images/doctor2x.png"
        name="Dr. Jose Simmons"
        subtitle="General Practitioner"
      />
    </header>
  );
}
