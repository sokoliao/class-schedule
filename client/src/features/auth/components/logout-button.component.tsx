import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export interface LogoutButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

export const Logout: React.FC<LogoutButtonProps> = (props) => {
  return (
    <>
      <button
        className="btn btn-primary d-flex justify-content-center align-items-center"
        style={{
          width: "2rem",
          height: "2rem",
        }}
        onClick={props.onClick}
      >
        {props.isLoading && (
          <div
            className="spinner-border spinner-border-sm text-light"
            role="status"
          />
        )}
        {!props.isLoading && <FontAwesomeIcon icon={faArrowRightFromBracket} />}
      </button>
    </>
  );
};
