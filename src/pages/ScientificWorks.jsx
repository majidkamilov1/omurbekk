import React, { useEffect, useState } from "react";
import Scientific from "../components/Scientific";
import axios from "axios";

const ScientificWorks = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const respons = await axios.get(
        "https://omurbek.pythonanywhere.com/api/v1/scientific_works/",{}
      );

      setdata(respons.data.results);
    };
    fetchData();
  }, []);
  return (
    <main className="ScientificWorks">
      <div className="container">
        <div className="ScientificWorks__item">
          {data?.map((item) => (
            <Scientific key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ScientificWorks;
