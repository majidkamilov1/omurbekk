import React from "react";

const PlaceWork = ({title, year}) => {
  return (
    <div className="place__works--work">
      <span>{year}</span>
      <p>{title}</p>
    </div>
  );
};

export default PlaceWork;
