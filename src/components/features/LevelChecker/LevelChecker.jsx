export default function LevelChecker({ diagnosticType, activePatient }) {
  return (
    <p className="flex_start gap8">
      {activePatient
        ? diagnosticType.levels === "Higher than Average" && (
            <figure>
              <img
                src="/images/ArrowUp.svg"
                alt={`${diagnosticType.levels} icon`}
                width={10}
                height={5}
              />
            </figure>
          )
        : null}
      {activePatient
        ? diagnosticType.levels === "Lower than Average" && (
            <figure>
              <img
                src="/images/ArrowDown.svg"
                alt={`${diagnosticType.levels} icon`}
                width={10}
                height={5}
              />
            </figure>
          )
        : null}

      {activePatient ? diagnosticType.levels : "N/A"}
    </p>
  );
}
