import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Plan = () => {
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
          <p>
            Как сформировать учебный план Порядок формирования учебного плана
            можно обозначить в следующей последовательности:
          </p>
        </div>
        <table className="plan__lists">
          <tbody>
            <tr>
              <th className="num">№</th>
              <th className="name">Название дисциплины</th>
              <th className="btn">Уч.план</th>
            </tr>
            {data?.results?.map((item) => (
              <tr key={item.id}>
                <td className="num">1</td>
                <td className="name">{item.name} </td>
                <td className="btn">
                  <Link to={`/discipline/${item.id}`}>Уч.план</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Plan;
