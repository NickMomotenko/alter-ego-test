import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";

const App = () => {
  const [news, setNews] = useState([]);

  const [isLoggin, setIsLoggin] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setNews(data));
    setIsLoggin(localStorage.getItem("isLoggin") == "true" ? true : false);
  }, []);

  const auth = () => {
    setIsLoggin(true);
    localStorage.setItem("isLoggin", 'true');
  };

  const unAuth = () => {
    setIsLoggin(false);
    localStorage.setItem("isLoggin", 'false');
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Route
          path="/"
          exact
          render={() =>
            isLoggin ? (
              <Redirect to="/profile" />
            ) : (
              <LoginForm auth={auth} unAuth={unAuth} />
            )
          }
        />
        <Route
          path="/profile"
          render={() =>
            isLoggin ? <Profile unAuth={unAuth} /> : <Redirect to="/" />
          }
        />
        <Route path="/news" render={() => <News news={news} />} />
      </div>
    </Router>
  );
};

export default App;
