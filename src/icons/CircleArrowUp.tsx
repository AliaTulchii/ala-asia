
const CircleArrowUp = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      className="up-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Білий круг з обводкою */}
      <circle cx="12" cy="12" r="11" strokeWidth="1" />

      {/* Маленька стрілка */}
      <path
        d="M12 15V8M12 8L9 11M12 8L15 11"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CircleArrowUp;
