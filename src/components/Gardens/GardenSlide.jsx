import React from "react";
import { GardensData } from "../../data/GardensData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const GardenSlide = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {GardensData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Link to="/gardens">
            <div className="garden-card">
              <div className="number">
                <span>{slide.num}</span>
              </div>
              <h1 className="title">{slide.title}</h1>
              <div className="card-text">
                <p>{slide.description}</p>
              </div>
              <div className="garden-img">
                <img src={slide.img} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GardenSlide;
