import React, { useEffect, useState } from "react";
import Lesson from "./Lesson";
import axios from "axios";
import { useParams } from "react-router-dom";

const checkData = (time) => {
  let date = new Date();
  let [hour, minute] = time.split(":");
  date.setHours(hour, minute);
  return date.getTime();
};

const StudyDiscipline = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://omurbek.pythonanywhere.com/api/v1/startendtime/`
        );
        const data = await response.data;

        setData(
          data?.results.sort((a, b) => checkData(a.start) - checkData(b.start))
        );
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      }
    }
    fetchData();
  }, []);
  console.log(data);
  return (
    <section className="StudyDiscipline">
      <div className="container">
        <h3 className="StudyDiscipline__text">Окуу дициплинасы</h3>
        <table className="StudyDiscipline__table">
          <tbody>
            <tr>
              <th className="time">Время</th>
              <th>ПН</th>
              <th>ВТ</th>
              <th>СР</th>
              <th>ЧТ</th>
              <th>ПТ</th>
              <th>СБ</th>
            </tr>

            {data?.map((item) => (
              <Lesson
                key={Math.random()}
                time={`${item.start} - ${item.end}`}
                lessons={item.lessons}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StudyDiscipline;
