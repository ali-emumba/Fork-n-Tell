import React from "react";
import "./styles.css";
import { Navigate } from "react-router-dom";

const FloatingIcon = () => {
  const handleFloatingIconClick = () => {
    <Navigate to="/" />;
  };

  return (
    <div className="circular-text-wrapper" onClick={handleFloatingIconClick}>
      <svg viewBox="0 0 500 500">
        <defs>
          <path
            id="textcircle"
            d="M250,400
            a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
            transform="rotate(12,250,250)"
          />
        </defs>
        <g className="textcircle">
          <text textLength="940">
            <textPath
              xlinkHref="#textcircle"
              aria-label="CSS & SVG are awesome"
              textLength="940"
            >
              Fork N Tell | Fork N Tell |&#160;
            </textPath>
          </text>
        </g>
      </svg>
      <div className="fork-icon">
        <svg
          width="38px"
          height="38px"
          viewBox="-11 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          fill="#03254a"
          stroke="#03254a"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="0.128"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>fork</title> <desc>Created with Sketch Beta.</desc>{" "}
            <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke-width="0.00032"
              fill="none"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              {" "}
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-111.000000, -463.000000)"
                fill="#03254a"
              >
                {" "}
                <path
                  d="M120,463 C119.448,463 119,463.448 119,464 L119,471 C119,472.407 118.163,473.356 117,473.802 L117,464 C117,463.448 116.552,463 116,463 C115.448,463 115,463.448 115,464 L115,473.802 C113.837,473.356 113,472.407 113,471 L113,464 C113,463.448 112.552,463 112,463 C111.448,463 111,463.448 111,464 L111,471 C111,473.419 112.718,475.437 115,475.899 L115,494 C115,494.553 115.448,495 116,495 C116.552,495 117,494.553 117,494 L117,475.899 C119.282,475.437 121,473.419 121,471 L121,464 C121,463.448 120.552,463 120,463"
                  id="fork"
                  sketch:type="MSShapeGroup"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default FloatingIcon;
