import React from "react";

import { Link } from "react-router-dom";

const MenuItem = ({ title, route }) => {
  return (
    <li className="menu__item">
      <Link to={`${route}`} className="menu__link">
        {title}
      </Link>
    </li>
  );
};

const Menu = () => {
  const menu = [
    { title: "Главная", route: "/" },
    { title: "Новости", route: "/news" },
    { title: "Профиль", route: "/profile" },
  ];

  return (
    <nav className="menu">
      <ul className="menu__list">
        {menu.map((item, index) => (
          <MenuItem key={`${item}-${index}`} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
