import MainMenu from "./MainMenu/MainMenu";
import classes from "./Header.module.scss";
import UserInfo from "../../features/UserInfo/UserInfo";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// import UserItem from "../../ui/userItem/UserItem";

export default function Header() {
  return (
    <header>
      <div className={`${classes.headerContainer} container`}>
        <a href="/">
          <figure>
            <img
              src="/images/TestLogo.svg"
              alt="Company logo"
              width={210}
              height={48}
            />
          </figure>
        </a>

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
