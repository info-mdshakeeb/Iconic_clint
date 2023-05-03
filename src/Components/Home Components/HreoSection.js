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

        </div>
    );
};

export default HeroSection;