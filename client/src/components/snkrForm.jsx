import React from "react";

const SnkrForm = ({ match }) => {
  return <h1> Snkr Form : {`${match.params.id}  ${match.params.name}`}</h1>;
};

export default SnkrForm;
