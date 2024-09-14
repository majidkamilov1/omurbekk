import React, { useEffect, useState } from "react";
import Resources from "../components/Resources";
import axios from "axios";

const ElectronicResources = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://omurbek.pythonanywhere.com/api/v1/resources/", {name:"dcsdcs", password:"sdcdcdcf"}
      );
      setData(response.data);
    };

    fetchData();
  }, []);
  return (
    <main className="ElectronicResources">
      <div className="container">
        <div className="ElectronicResources__item">
          {Data?.results?.map((item) => (
            <Resources key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ElectronicResources;
