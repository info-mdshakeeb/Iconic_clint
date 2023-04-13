import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getRandomProductsApi } from '../../Api/api';
import "../../Pages/Home/Home.css";

const RandomSection = () => {
    const { data: randomData = [] } = useQuery({
        queryKey: ['randomData'],
        queryFn: () => getRandomProductsApi(10)
    })
    // console.log(products);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} bg-white rounded-full p-2 mx-4 `}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
        );
    }

    return (
        <div className='container px-3 md:px-9 m-auto '>
            <div className="py-4">
                <div className="flex justify-between mb-4 pb-8">
                    <p className="font-bold text-2xl"> Recent Best Products</p>
                </div>
                <ul>
                    <Slider {...settings}>
                        {randomData?.map((product, i) =>
                            <div className="flex flex-col items-center justify-center  rounded-md " key={i}>
                                <Link to={`/products/${product?._id}`} key={i}>
                                    <div className="flex flex-col items-center justify-center bg-white rounded-md shadow-md">
                                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                            <div className="">
                                                <img className=" h-60 w-52 transition-transform duration-500  object-fill group-hover:rotate-3 group-hover:scale-125" src={product?.ImgUrls[2]} alt="" />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/50 group-hover:via-black/60 group-hover:to-black/50">
                                            </div>
                                            <div className="absolute inset-0 flex translate-y-[70%]  xl:translate-y-[67%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 shadow-sm">
                                                <h1 className="font-dmserif text-sm xl:text-xl font-bold  text-white group-hover:opacity-0  ">{product?.Names.length > 11 ? product?.Names.slice(0, 11) + '..' : product?.Names}</h1>
                                                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 h-[135px]">
                                                    {product?.Names}
                                                </p>
                                                {/* <button className=" my-6 px-3.5 font-com text-sm btn btn-sm text-white shadow">See More</button> */}
                                            </div>
                                        </div>
                                    </div></Link>
                            </div>)
                        }
                    </Slider>
                </ul>
            </div>
        </div>
    );
};

export default RandomSection;