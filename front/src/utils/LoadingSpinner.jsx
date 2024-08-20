function LoadingSpinner() {
  return (
    <div>
      <div className="container-pacman">
        <h1>Loading resources...</h1>
        <svg
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <circle className="food" cx="60" cy="50" r="5">
              <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="0.7042253521126761s"
                values="95;35"
                keyTimes="0;1"
                begin="-0.9514s"
              ></animate>
              <animate
                attributeName="fill-opacity"
                repeatCount="indefinite"
                dur="0.7042253521126761s"
                values="0;1;1"
                keyTimes="0;0.2;1"
                begin="-0.9514s"
              ></animate>
            </circle>
            <circle className="food" cx="60" cy="50" r="5">
              <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="0.7042253521126761s"
                values="95;35"
                keyTimes="0;1"
                begin="-0.4686s"
              ></animate>
              <animate
                attributeName="fill-opacity"
                repeatCount="indefinite"
                dur="0.7042253521126761s"
                values="0;1;1"
                keyTimes="0;0.2;1"
                begin="-0.4686s"
              ></animate>
            </circle>
            <circle className="food" cx="60" cy="50" r="5">
              <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="0.7042253521126761s"
                values="95;35"
                keyTimes="0;1"
                begin="0s"
              ></animate>
              <animate
                attributeName="fill-opacity"
                repeatCount="indefinite"
                dur="0.7042253521126761s"
                values="0;1;1"
                keyTimes="0;0.2;1"
                begin="0s"
              ></animate>
            </circle>
          </g>
          <g transform="translate(-15 0)">
            <path
              className="pacman"
              d="M50 50L20 50A30 30 0 0 0 80 50Z"
              transform="rotate(90 50 50)"
            ></path>
            <path className="pacman" d="M50 50L20 50A30 30 0 0 0 80 50Z">
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="0.7042253521126761s"
                values="0 50 50;45 50 50;0 50 50"
                keyTimes="0;0.5;1"
              ></animateTransform>
            </path>
            <path className="pacman" d="M50 50L20 50A30 30 0 0 1 80 50Z">
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="0.7042253521126761s"
                values="0 50 50;-45 50 50;0 50 50"
                keyTimes="0;0.5;1"
              ></animateTransform>
            </path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default LoadingSpinner;
