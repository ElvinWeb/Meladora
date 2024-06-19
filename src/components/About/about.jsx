import React from "react";
import { AboutIcons } from "./about-icons";
import title_design_2 from "../../meladora-image/design/title-design-2.png";
import title_design_1 from "../../meladora-image/design/title-design-1.png";
import text_design_bg from "../../meladora-image/design/txt-design-bg.png";

function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="col-12 col-lg-6 col-xl-4 about-image">
          <div className="about-bg"></div>
        </div>
        <div className="col-12 col-lg-6 col-xl-8 about-right">
          <img src={text_design_bg} className="text-design" alt="" />
          <div className="about-content">
            <div className="content-title">
              <h2>Biz Kimik?</h2>
              <img src={title_design_1} className="title-desig-1" alt="" />
            </div>
            <div className="about-text">
              <p className="text">
                Əslində hər şey illər əvvəl İsmayıllı rayonunda ailəvi gəzintidə
                olduğumuz zaman baş verdi. İsmayıllı rayonunun füsunkar
                təbiətinin gözəlliyi bizim bir gün burda kənd təsərrüfatı ilə
                məşğul olmaq arzusu oyatdı. Daha sonra dostlarımızla bu məsələni
                müzakirə edərək İsmayıllıda təsərrüfat qurmağa qərar verdik.
                Böyük uğurlar vaxtında və yerində verilən qərarlarla çox
                bağlıdır. Elə bizdə ilk səfərdə qərar verdik və başladıq. İllər
                çox sürətli keçdir. Bizdə böyümədə zamanın sürətindən geri
                qalmadıq. Qısa zaman müddətində əldə etdiyimiz uğurlar və daha
                sürətlə böyüməyə davam etməyimiz işimizə olan sevginin
                göstəricisidir. Alma, armud nektarin, gavalıç gilas və qoz
                yetişdirməklə qalmadıq, tingçilik və toxumçuluq məhsul sıramızı
                genişləndirdik. Qısa zamanda ən son texnoloji yeniliklərlə damla
                suvarma sistemlərinin qurulması BAĞLARIN layihələndirilməsi,
                salınması kimi çətin işlərin öhdəsindən uğurla gəldik. 2022-ci
                ildə əsas hədəfimiz brendimizin "made in AZERBAİJAN" adına layiq
                ölkə kənarında rəflərdə görünməsidir. Növbəti hədəfləri sizlərlə
                paylaşmaq arzusuyla
              </p>
              <img src={title_design_2} className="about-text-design" alt="" />
            </div>
            <div className="about-quality">
              <AboutIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
