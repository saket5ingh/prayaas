
import { Swiper, SwiperSlide } from "swiper/react";

import gallery_1 from "../../assets/gallery/gallery_1.jpg"
import gallery_2 from "../../assets/gallery/gallery_2.jpg"
import gallery_3 from "../../assets/gallery/gallery_3.jpg"
import gallery_4 from "../../assets/gallery/gallery_4.jpg"
import gallery_5 from "../../assets/gallery/gallery_5.jpg"
import gallery_6 from "../../assets/gallery/gallery_6.jpg"
import gallery_7 from "../../assets/gallery/gallery_7.jpg"
import gallery_8 from "../../assets/gallery/gallery_8.jpg"
import gallery_9 from "../../assets/gallery/gallery_9.jpg"
import gallery_10 from "../../assets/gallery/gallery_10.jpg"
import gallery_11 from "../../assets/gallery/gallery_11.jpg"
import gallery_12 from "../../assets/gallery/gallery_12.jpg"
import gallery_13 from "../../assets/gallery/gallery_13.jpg"
import gallery_14 from "../../assets/gallery/gallery_14.jpg"
import gallery_15 from "../../assets/gallery/gallery_15.jpg"
import gallery_16 from "../../assets/gallery/gallery_16.jpeg"
import gallery_17 from "../../assets/gallery/gallery_17.png"
import gallery_18 from "../../assets/gallery/gallery_18.jpg"
import gallery_19 from "../../assets/events/blood_donate.jpg"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slider() {
  const gallery_img = [
    gallery_2, gallery_3, gallery_4, gallery_5, gallery_6, ,
    gallery_18, gallery_7, gallery_8, gallery_9,
    gallery_10, gallery_11, gallery_12, gallery_17, gallery_14, gallery_15, gallery_16]

  return (
    <>
      <div className="swiper-cont">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >

          {gallery_img.map((img) => {
            return (<SwiperSlide>
              <div className="element" >
                <img src={img} />
              </div>
            </SwiperSlide>)
          })}

          {/* <SwiperSlide>
          <div className="element"> 
          <img src={gallery_1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="element"> 
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="element"> 
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="element"> 
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="element"> 
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="element"> 
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="element"> 
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </div>
        </SwiperSlide>*/}
        </Swiper>
      </div>
    </>
  );
}
