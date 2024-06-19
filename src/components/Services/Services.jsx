import React from "react";
import { ServicesData } from "../../data/ServiceData";
import title_design_1 from "../../meladora-image/design/title-design-1.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services-head">
          <h1 className="title">Xidmətlərimiz</h1>
          <img src={title_design_1} alt="" className="design-1" />
        </div>
        <div className="row">
          {ServicesData.map((service, index) => (
            <div className="service col-12 col-lg-4 col-md-6" key={service.id}>
              <Link to="/services">
                <div className="service-card">
                  <div className="service-icon">
                    <img src={service.img} alt="" />
                  </div>
                  <h2 className="service-head">{service.title}</h2>
                  <div className="service-text">
                    <p className="text">{service.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
