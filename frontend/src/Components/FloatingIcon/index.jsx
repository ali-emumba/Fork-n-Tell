import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const FloatingIcon = () => {
  const navigate = useNavigate();

  // Handle the click event to navigate to the homepage
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="floating-icon" onClick={handleClick}>
      {/* Static Fork Icon */}
      <svg
        className="fork-icon"
        width="38px"
        height="38px"
        viewBox="-11 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="#03254a"
        stroke="#03254a"
      >
        <g id="SVGRepo_iconCarrier">
          <path
            d="M120,463 C119.448,463 119,463.448 119,464 L119,471 C119,472.407 118.163,473.356 117,473.802 L117,464 C117,463.448 116.552,463 116,463 C115.448,463 115,463.448 115,464 L115,473.802 C113.837,473.356 113,472.407 113,471 L113,464 C113,463.448 112.552,463 112,463 C111.448,463 111,463.448 111,464 L111,471 C111,473.419 112.718,475.437 115,475.899 L115,494 C115,494.553 115.448,495 116,495 C116.552,495 117,494.553 117,494 L117,475.899 C119.282,475.437 121,473.419 121,471 L121,464 C121,463.448 120.552,463 120,463"
            fill="#03254a"
          />
        </g>
      </svg>

      {/* Rotating Text */}
      <div className="spinning-text">Fork N Tell . Fork N Tell .</div>
    </div>
  );
};

export default FloatingIcon;
