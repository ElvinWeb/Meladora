import React from "react";
import title_design_1 from "../../meladora-image/design/title-design-1.png";
import { ServicesPageData } from "../../data/ServicesPageData";

const ServiceItems = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="service-head">
          <h1 className="title">Xidmətlərimiz</h1>
          <img src={title_design_1} alt="" />
        </div>
        <div className="services-container">
          {ServicesPageData.map((service) => (
            <div className="row mb-5 service-col" key={service.id}>
              <div className="col-12 col-lg-6">
                <div className="service-card">
                  <div className="service-icon">
                    <img src={service.icon} alt="" />
                  </div>
                  <h3 className="title">{service.title}</h3>
                  <div className="service-content">
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="service-image">
                  <img src={service.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceItems;
