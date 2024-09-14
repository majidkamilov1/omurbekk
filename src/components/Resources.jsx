import React from "react";

const Resources = ({ item }) => {
  console.log(item);
  return (
    <section className="Resources">
      <div
        style={{ backgroundImage: `URL("${item.image}")` }}
        className="Resources__img"
      ></div>
      <div className="Resources__content">
        <h3>{item.name}</h3>
        <span>30 декабря 1975 г</span>
        <p>{item.description}</p>
        <a href={item.pdf}>
          Читать{" "}
        </a>
      </div>
    </section>
  );
};

export default Resources;
