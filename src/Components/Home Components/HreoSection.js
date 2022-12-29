import React from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "../../index.css";



import { Swiper, SwiperSlide } from 'swiper/react';

const Hreo = () => {
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
                    <img src="https://media.e-valy.com/cms/products/images/b8825bb3-9318-43fa-8271-9933e4cdb21e" className="w-full overflow-hidden" alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.e-valy.com/cms/products/images/bbfcc214-3322-4262-ba04-01d0dc40b23a" className="w-full" alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.e-valy.com/cms/products/images/3d3fbd76-3e41-4d73-bf3c-aa59858c6f9a" className="w-full" alt='' />
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

export default Hreo;