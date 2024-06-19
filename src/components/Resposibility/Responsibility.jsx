import React from "react";
import title_design_1 from "../../meladora-image/design/title-design-1.png";

const Responsibility = () => {
  return (
    <section className="social-resp">
      <div className="container social-col">
        <div className="section-head">
          <h1 className="title">Sosial Məsuliyyət</h1>
          <img src={title_design_1} alt="" />
        </div>
        <div className="social-content">
          <p className="mb-3">
            Sahibkar olaraq təkcə qazanc əldə etmək deyil həmdə cəmmiyyətə
            müxtəlif sahələrdə faydalı olmağın zəruriliyini anlayırıq və bu
            istiqamətdə fəaliyyətlərimiz davam edir. Əhalinin müəyyən
            təbəqələrinin həyatını yaxşılaşdırmaq üçün sosial əhəmiyyətli
            proqramlar həyata keçiririk.
          </p>
          <p>Dostlarımız və çevrəmiz bizi yaxşı tanıyır.</p>
        </div>
      </div>
    </section>
  );
};

export default Responsibility;
