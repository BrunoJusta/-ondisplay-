const Waves = (props) => {
  const { maxHeight } = props;

  return (
    <div
      style={{
        position: "absolute",
        minWidth: "100vw",
        maxHeight: "400px",
        zIndex: -100,
      }}
    >
      <svg
        viewBox="0 0 1440 702"
        width="100vw"
        height="100%"
        maxHeight="400px"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M622.833 631.263C234.236 803.42 14.985 612.871 0 492.021V0H1440V702C1365.58 637.77 1244.83 551.569 1081.42 530.958C952.891 514.746 855.648 528.121 622.833 631.263Z"
          fill="url(#paint0_linear_489_11764)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_489_11764"
            x1="126.705"
            y1="48.5001"
            x2="1616.34"
            y2="667.873"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0001" stopColor="#45A9E1" />
            <stop offset="1" stopColor="#172639" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Waves;
