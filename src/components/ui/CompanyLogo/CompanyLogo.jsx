import classes from "./CompanyLogo.module.scss";

export default function CompanyLogo({ logoClass }) {
  return (
    <a href="/">
      <figure
        className={`${classes.companyLogo} ${logoClass ? logoClass : ""}`}
      >
        <img
          src="/images/TestLogo.svg"
          alt="Company logo"
          width={210}
          height={48}
        />
      </figure>
    </a>
  );
}
