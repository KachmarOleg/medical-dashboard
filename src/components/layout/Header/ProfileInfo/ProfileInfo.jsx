import Avatar from "../../../ui/Avatar/Avatar";
import classes from "./ProfileInfo.module.scss";

export default function ProfileInfo({ userPic, name, subtitle }) {
  return (
    <div className={classes.profileInfo}>
      <button className="flex_center">
        <figure className={classes.userInfo}>
          <Avatar imgSrc={userPic} />

          <figcaption>
            <span className={classes.userName}>{name}</span>
            <span className={classes.userSubtitle}>{subtitle}</span>
          </figcaption>
        </figure>
      </button>

      <button className="flex_center">
        <figure>
          <img
            src="/images/settings.svg"
            alt="Settings icon"
            width={19}
            height={20}
          />
        </figure>
      </button>

      <button className={`${classes.moreVertical} flex_center`}>
        <figure>
          <img
            src="/images/more-vertical.svg"
            alt="Settings icon"
            width={19}
            height={20}
          />
        </figure>
      </button>
    </div>
  );
}
