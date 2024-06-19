import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const ProductModalSlide = ({ onImages }) => {
  return (
    <div class="product-galery">
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
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {onImages.map((img) => (
          <SwiperSlide key={img.id}>
            <div class="gallery-card">
              <img src={img.path} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductModalSlide;
