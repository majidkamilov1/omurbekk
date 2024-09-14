import React, { useEffect, useState } from "react";
import List from "./List";
import axios from "axios";
import Lists from "./Lists";

const Syllabus = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://omurbek.pythonanywhere.com/api/v1/lessons/"
        );
        const data = await response.data;

        setData(data);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      }
    }
    fetchData();
  }, []);

  console.log(data);
  return (
    <section className="plan">
      <div className="container">
        <div className="plan__text">
          <h3>Учебный план </h3>
        </div>
        <table className="plan__lists">
          <tbody>
            <tr>
              <th className="num">№</th>
              <th className="name">Название дисциплины</th>
              <th className="btn">Уч.план</th>
            </tr>

            {data?.results?.map((item) => (
              <Lists item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Syllabus;
