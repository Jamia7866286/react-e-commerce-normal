import { Button } from "bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

export const GoBack = ({ url }) => {
  let navigate = useNavigate();

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => navigate(url)}
    >
      go back
    </button>
  );
};

export default GoBack;
