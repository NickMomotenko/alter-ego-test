import React, { useState } from "react";

import Input from "../../modules/Input/Input";

const LoginFormLabel = ({ item, handleChange }) => {
  return (
    <label className="form__label">
      <span className="form__name">{item}</span>
      <Input handleChange={handleChange} item={item} />
    </label>
  );
};

const LoginForm = ({ auth, unAuth }) => {
  const [data, setData] = useState({
    login: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.login === "admin" && data.password === "12345") {
      auth();
    } else {
      unAuth();
      alert("Имя пользователя или пароль введены неверно");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {Object.keys(data).map((item, index) => (
        <LoginFormLabel
          key={`${item}-${index}`}
          item={item}
          handleChange={handleChange}
        />
      ))}
      <button className="button" type="submit">
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
