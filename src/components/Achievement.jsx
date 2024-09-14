import React from "react";
import AchievementCard from "./AchievementCard";

const Achievement = () => {
  return (
    <section className="achievement">
      <div className="container">
        <div className="achievement__text">
          <h2>Жетишкендиктери</h2>
          <p>We offer some great deals so you can save money:</p>
        </div>
        <div className="achievement__cards">
          <AchievementCard title="Диплом" description="2008-жылы Ош мамлекеттик университетинин бүтүрүүчүсү" />
          <AchievementCard title="Диплом" description="2014-жылы Кыргыз Республикасынын Президентине караштуу Мамлекеттик башкаруу Академиясында магистратура бүтүрүүчүсү" />
          <AchievementCard title="Ардак Громата" description="2016-жылы, ОшМунун Ардак Громатасы" />
          <AchievementCard title="Ардак громата" description="2019-жылы, Ош шаардык Кеңешинин Ардак Громатасы" />
          <AchievementCard title="Документ" description="2021-жылы экономика илимдеринин кандидаты" />
          
        </div>
      </div>
    </section>
  );
};

export default Achievement;
