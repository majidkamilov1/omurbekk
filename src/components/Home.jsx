import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home__item">
          <div className="home__item--text">
            <h1>Имаралиев Өмүрбек Рахманалиевич</h1>
            <span>11-январь, 1985-жыл</span>
            <p>
              Экономика илимдеринин кандидаты, доцент. Азыркы учурда Ош
              мамлекеттик университетинин Математика, физика информациялык
              технологиялар институнун Колдонмо Информатика жана Информациялык
              Коопсуздук кафедрасында эмгек жолун улантууда. <br />
              "Эч качан өзүңөрдүн ишиңерди, келечегиңерди, жашооңорду башкаларга
              байлабагыла. Башкалардан эч нерсе күтпө, сага ыңгайлуу жагын кыл.
              Сен башкаларды ойлогонуң менен башкалар сени ойлойбу?"
            </p>
          </div>
          <div className="home__item--img">
            <img src="\img\home_img1.JPG" alt="" />
            <div className="home__item--img__position">
              <img src="/svg/home__position.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
