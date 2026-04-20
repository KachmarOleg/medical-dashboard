import Avatar from "../Avatar/Avatar";
// import classes from "./UserItem.module.scss";

export default function UserItem({ userPic, userPic2x, name, subtitle }) {
  return (
    <div className={classes.userItem}>
      <Avatar imgSrc={userPic} imgSrc2x={userPic2x} />
    </div>
  );
}
