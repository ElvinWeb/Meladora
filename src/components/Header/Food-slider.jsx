import React from "react";
import { slideData } from "../../data/BannerSlideData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function Foodslider() {
  return (
    <div className="food-swiper">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={{
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
          {slideData.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div
                className="category-card shadow "
                style={{ background: slide.Bgcolor }}
              >
                <h3 className="title">{slide.title}</h3>
                <img src={slide.image} alt="banner-img" className="slide-img" />
                <img
                  src={slide.design}
                  alt="slide-design"
                  className="slide-design"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Foodslider;
