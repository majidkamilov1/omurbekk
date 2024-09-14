import axios from "axios";
import React, { useEffect, useState } from "react";

const Photos = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(
        "https://omurbek.pythonanywhere.com/api/v1/photos/"
      );

      const data = await response.data;
      setData(data);
    };
    fetchdata();
  }, []);
  const [index, setindex] = useState(0);
  return (
    <section className="photos">
      <div className="container">
        <div className="photos__img">
          <img src={Data?.results?.[index]?.image} alt="" />
          {/* <div
            style={{
              backgroundImage: `URL("${}")`,
            }}
          ></div> */}
        </div>
        <div className="photos__images">
          {Data?.results?.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setindex(index)}
              style={{ backgroundImage: `URL("${item.image}")` }}
              className="photos__images--img"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photos;
