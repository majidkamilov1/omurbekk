import React from "react";

const AchievementCard = ({ src, title, description }) => {
  return (
    <div className="achievement__cards--card">
      <div className="achievement__cards--card__img">
        <img src="/img/place__card.png" alt="" />
      </div>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default AchievementCard;
