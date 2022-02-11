import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const Logout: React.FC<{}> = () => {
  return (
    <>
      <button
        className="btn btn-primary d-flex justify-content-center align-items-center"
        style={{
          width: "2rem",
          height: "2rem",
        }}
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </button>
    </>
  );
};
