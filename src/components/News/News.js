import React from "react";

const NewsItem = ({ title, body, id }) => {
  return (
    <li className="news__item">
      <div className="news__index">{id}</div>
      <div className="news__title">{title}</div>
      <div className="news__text">{body}</div>
    </li>
  );
};

const News = ({ news }) => {
  return (
    <div className="news">
      <ul className="news__list">
        {news?.map((item) => (
          <NewsItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default News;
