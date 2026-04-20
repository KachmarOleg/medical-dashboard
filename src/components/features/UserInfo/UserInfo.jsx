import Avatar from "../../ui/Avatar/Avatar";
import classes from "./UserInfo.module.scss";

export default function UserInfo({
  userPic,
  userPic2x,
  name,
  subtitle,
  is_active,
}) {
  return (
    <div
      className={`${classes.userItem} flex_between `}
      style={is_active ? { backgroundColor: "#d8fcf7" } : {}}
    >
      <figure className={classes.userInfo}>
        <Avatar imgSrc={userPic} imgSrc2x={userPic2x} />

        <figcaption>
          <span className={classes.userName}>{name}</span>
          <span className={classes.userSubtitle}>{subtitle}</span>
        </figcaption>
      </figure>

      <figure>
        <img src="/images/more-horizontal.svg" alt="Show more icon" />
      </figure>
    </div>
  );
}
