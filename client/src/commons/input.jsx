import React from "react";

const Input = ({ name, label, value, error, onChange, type, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label} </label>
      <input
        {...rest}
        id={name}
        value={value}
        type={type}
        className="form-control"
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
