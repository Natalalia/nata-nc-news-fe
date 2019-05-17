import React from "react";

const ShowError = ({ status, message }) => {
  if (status && message) {
    return (
      <p>
        {status}:{message}
      </p>
    );
  }
  return <p>Bad Url</p>;
};

export default ShowError;
