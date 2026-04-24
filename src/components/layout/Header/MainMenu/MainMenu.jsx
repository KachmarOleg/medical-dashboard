import { useState } from "react";
import classes from "./MainMenu.module.scss";
import CompanyLogo from "../../../ui/CompanyLogo/CompanyLogo";

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        className={`${classes.burgerBtn} ${isOpen ? classes.burgerBtn__open : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <div
          className={classes.overlay}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <nav
        className={`${classes.mainMenu} ${isOpen ? classes.mainMenu__open : ""}`}
      >
        <CompanyLogo logoClass="hideOnMobile" />

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
    </>
  );
}
