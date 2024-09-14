import React from "react";
import { Link } from "react-router-dom";

const Scientific = ({ item }) => {
  const downloadPDF = async (e) => {
    e.preventDefault();
    const url = item.pdf;
    const response = await fetch(url);
    const blob = await response.blob();
    const blobURL = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.style.display = "none";
    anchor.href = blobURL;
    anchor.download = "image-name.png";
    document.body.appendChild(anchor);
    anchor.click();
  };
  console.log(item);
  return (
    <section className="scientific">
      <div
        style={{ backgroundImage: `URL("${item?.image}")` }}
        className="scientific__img"
      ></div>
      <div className="scientific__content">
        <h3>{item?.title}</h3>
        <span>{item.date} г</span>
        <p>{item?.description}</p>
        <div className="scientific__content--buttons">
          <a
            onClick={downloadPDF}
            href={`${item?.pdf}`}
            download="random.png"
            className="btn"
          >
            Скачать
          </a>

          <Link to={`${item?.pdf}`} className="btn">
            Читать
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Scientific;
