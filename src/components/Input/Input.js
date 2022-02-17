import React from "react";

const Input = (props) => {
  const { icon } = props;
  return (
    <div className="inputcontainer">
      {/* prevent icon from being passed to dom by setting undefined */}
      <input {...props} icon={undefined} />
      {icon ? icon : null}
    </div>
  );
};

export default Input;
