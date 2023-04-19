import React from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroSection = () => {
    return (
        <div className='container px-3 md:px-9 h-full m-auto mb-4'>
            <Swiper

                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                autoplay={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/T20XPbh/Get-your-phone-With-Us-2.png" alt="Get-your-phone-With-Us-2" border="0" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/d2TPdMr/Get-your-phone-With-Us.png" alt="Get-your-phone-With-Us" border="0" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/9yNQ9Tm/3.png" alt="3" border="0" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/DzvxCX2/1.png" alt="1" border="0" className="w-full overflow-hidden" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/0sdnbGN/4.png" alt="4" border="0" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/7kypNcv/2.png" alt="2" border="0" />
                </SwiperSlide>

            </Swiper>
            {/* <div className=" w-full ">
                <div id="slide1" className="carousel-item relative w-full">

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://media.e-valy.com/cms/products/images/b8825bb3-9318-43fa-8271-9933e4cdb21e" className="w-full overflow-hidden" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://media.e-valy.com/cms/products/images/bbfcc214-3322-4262-ba04-01d0dc40b23a" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://media.e-valy.com/cms/products/images/3d3fbd76-3e41-4d73-bf3c-aa59858c6f9a" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default HeroSection;