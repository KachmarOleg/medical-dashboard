import classes from "./MainMenu.module.scss";

export default function MainMenu() {
  return (
    <nav className={classes.mainMenu}>
      <ul className={`${classes.mainMenuList} flex_center`}>
        <li>
          <a href="#">
            <figure>
              <img
                src="/images/home.svg"
                alt="Home icon"
                width={15}
                height={17}
              />
            </figure>
            Overview
          </a>
        </li>
        <li>
          <a href="#" className={classes.is_active}>
            <figure>
              <img
                src="/images/group.svg"
                alt="Group of people icon"
                width={24}
                height={17}
              />
            </figure>
            Patients
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img
                src="/images/calendar.svg"
                alt="Calendar icon"
                width={15}
                height={17}
              />
            </figure>
            Schedule
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img
                src="/images/credit-card.svg"
                alt="Credit card icon"
                width={19}
                height={17}
              />
            </figure>
            Message
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img
                src="/images/chat.svg"
                alt="Chat icon"
                width={22}
                height={17}
              />
            </figure>
            Transactions
          </a>
        </li>
      </ul>
    </nav>
  );
}
