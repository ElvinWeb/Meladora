import React from "react";
import title_design_1 from "../../meladora-image/design/title-design-1.png";

export const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-head">
          <h2 className="title">Əlaqə</h2>
          <img src={title_design_1} alt="" />
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <form  className="myform">
              <div className="form-head">
                <h3 className="title">Müraciət formu</h3>
              </div>
              <div className="input-control">
                <input type="text" placeholder="Adınız Soyadınız*" />
                <input type="number" placeholder="Telefon*" />
                <input type="email" placeholder="Email*" />
              </div>
              <textarea
                className="form-msg"
                cols="30"
                rows="10"
                placeholder="Mesajınız"
              ></textarea>
              <button className="contact-btn" type="submit">
                Göndər
              </button>
            </form>
          </div>
          <div className="col-12 col-lg-6">
            <div className="contact-info">
              <div className="info">
                <i className="fa-solid fa-phone"></i>
                <span>(055 555 55 55)</span>
              </div>
              <div className="info">
                <p>
                  İstehsal: <br />
                  İsmayıllı ray , Qalıncaq kəndi
                </p>
              </div>
              <div className="info">
                <i className="fa-solid fa-location-dot"></i>
                <span>
                  Meladora MMC <br />
                  Baş Ofis <br />
                  Baki
                </span>
              </div>
              <div className="social-media-icons">
                <ul className="social-links">
                  <li className="link">
                    <a href="/#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="link">
                    <a href="/#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="link">
                    <a href="/#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="link">
                    <a href="/#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li className="link">
                    <a href="/#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
