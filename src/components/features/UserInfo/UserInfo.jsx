import Avatar from "../../ui/Avatar/Avatar";
import classes from "./UserInfo.module.scss";

export default function UserInfo({
  onClick,
  userPic,
  userPic2x,
  name,
  subtitle,
  is_active,
}) {
  return (
    <button
      className={`${classes.userItem} flex_between `}
      style={is_active ? { backgroundColor: "#d8fcf7" } : {}}
      onClick={onClick}
    >
      <figure className={classes.userInfo}>
        <Avatar imgSrc={userPic} imgSrc2x={userPic2x} />
        {is_active}
        <figcaption>
          <span className={`${classes.userName} text_emphasized`}>{name}</span>
          <span className={`${classes.userSubtitle} text_regular`}>
            {subtitle}
          </span>
        </figcaption>
      </figure>

      <figure>
        <img src="/images/more-horizontal.svg" alt="Show more icon" />
      </figure>
    </button>
  );
}
