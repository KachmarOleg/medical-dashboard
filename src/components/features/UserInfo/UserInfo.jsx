import Avatar from "../../ui/Avatar/Avatar";
import classes from "./UserInfo.module.scss";

export default function UserInfo({ userPic, userPic2x, name, subtitle }) {
  return (
    <figure className={classes.userInfo}>
      <Avatar imgSrc={userPic} imgSrc2x={userPic2x} />

      <figcaption>
        <span className={classes.userName}>{name}</span>
        <span className={classes.userSubtitle}>{subtitle}</span>
      </figcaption>
    </figure>
  );
}
