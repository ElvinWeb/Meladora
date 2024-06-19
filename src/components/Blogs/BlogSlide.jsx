import React from "react";
import { BlogsData } from "../../data/BlogsSliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Blogslide = () => {
  return (
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
      {BlogsData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="blog-card">
            <div className="blog-card-img">
              <img src={slide.img} alt="" />
            </div>
            <h2 className="blog-card-title">{slide.title}</h2>
            <div className="blog-card-text">
              <p>{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Blogslide;
