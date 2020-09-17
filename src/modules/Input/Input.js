import React, { useState } from "react";

const Input = ({ handleChange, item }) => {
  const [value, setValue] = useState("");

  return (
    <input
      value={value}
      type={item}
      className="form__input"
      name={item}
      onChange={(e) => {
        handleChange(e.target.name, e.target.value);
        setValue(e.target.value);
      }}
    />
  );
};

export default Input;
