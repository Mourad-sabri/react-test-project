import React from "react";
import LoadingSpinner from "../../icons/LoadingSpinner";

const Button = (props) => {
  const { loading } = props;
  return (
    <button {...props} loading={undefined}>
      {loading && <LoadingSpinner />}
      {props.children}
    </button>
  );
};

export default Button;
