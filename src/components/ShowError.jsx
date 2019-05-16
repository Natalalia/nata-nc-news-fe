import React from "react";

const ShowError = props => {
  return (
    <h1>
      {props.status}:{props.message}
    </h1>
  );
};

export default ShowError;
