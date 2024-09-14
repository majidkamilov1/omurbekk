import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Topics = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://omurbek.pythonanywhere.com/api/v1/lessons/${id}/`
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
    <main className="Topics">
      <section className="plan container">
        <h3>Управление проектами в области информационных технологии</h3>
        <table className="plan__lists">
          <tbody>
            <tr>
              <th className="num">№</th>
              <th className="name">Тема урока</th>
              <th className="btn">Тема урока</th>
            </tr>

            {data?.topics?.map((item) => (
              <tr key={Math.random()}>
                <td className="num">1</td>
                <td className="name">{item.name} </td>
                <td className="btn">
                  <Link to={`${item.pdf}`}>Посмотреть</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Topics;
