import React from "react";
const days_of_week = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const Lesson = ({ time, lessons }) => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let day = lessons.find((el) => el.day_of_week == days_of_week[i]);
    if (day) {
      data.push(day);
    } else {
      data.push({
        science: "",
        group: "нету урока",
      });
    }
  }
  return (
    <tr>
      <td className="time">{time}</td>
      {data.map((item) => (
        <td key={Math.random()}>
          <h5>{item.science}</h5>
          <span>{item.group}</span>
        </td>
      ))}
    </tr>
  );
};

export default Lesson;
