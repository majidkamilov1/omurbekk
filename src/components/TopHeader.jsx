import React from "react";

const TopHeader = () => {
  return (
    <section className="topheader ">
      <div className="container">
        <div className="topheader__item">
          <div className="topheader__item--content ">
            <ul>
              <li>
                <p>
                  "Билим алуу – ийне менен кудук казгандай. Бирок, эң негизгиси
                  – ошо кудуктан суунун чыгышы. Курук кудукту каза бербеш
                  керек." "Эч качан өзүңөрдүн ишиңерди, келечегиңерди,
                  жашооңорду башкаларга байлабагыла. Башкалардан эч нерсе күтпө,
                  сага ыңгайлуу жагын кыл. Сен башкаларды ойлогонуң менен
                  башкалар сени ойлойбу?"
                </p>
              </li>
            </ul>
          </div>
          <div className="topheader__item--buttons">
            <button>KG</button>
            <button className="line">EN</button>
            <button>TR</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
