import React from "react";

const ShowError = props => {
  return (
    <p>
      {props.status}:{props.message}
    </p>
  );
};

export default ShowError;
