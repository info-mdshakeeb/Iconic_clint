import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getVerifiedAdvertisementProductsApi, getVerifiedAdvertisementShopsApi } from '../../Api/api';

const Advertisement = () => {

    const { data: AdProducts = [] } = useQuery({
        queryKey: ['AdProducts'],
        queryFn: () => getVerifiedAdvertisementProductsApi()
    })
    console.log(AdProducts);
    const { data: AdShops = [] } = useQuery({
        queryKey: ['AdShops'],
        queryFn: () => getVerifiedAdvertisementShopsApi()
    })



    // console.log(products);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2500,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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


    const settingsShops = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
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
        <div className='container px-3 md:px-9 m-auto border shadow-md rounded-lg bg-black text-white pb-10 '>
            <div className="py-4">
                <div className="flex justify-between mb-4 ">
                    <p className="font-bold text-2xl pt-5"> Advertisement </p>
                </div>
                <div className="md:flex gap-5">
                    <ul className='md:w-8/12 lg:w-9/12 xl:w-8/12'>
                        <p className="font-bold text-2xl my-8 text-center"> Products </p>
                        <Slider {...settings}>
                            {AdProducts?.map((product, i) =>
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
                    <ul className='md:w-4/12 lg:w-3/12 xl:w-4/12'>
                        <p className="font-bold text-2xl my-8 text-center"> Shops </p>
                        <Slider {...settingsShops}>
                            {AdShops?.map((data, i) =>
                                <Link to={`/shops/${data._id}`} key={i}>
                                    <div className="inline-flex flex-col items-center justify-center w-full h-full bg-white rounded-md shadow-sm hover:scale-[0.91] duration-200  " >
                                        <a href="/" className='p-4' >
                                            <div className="h-[135px] " >
                                                <img className=' max-h-32 w-32 mx-auto'
                                                    src={data?.photoUrl} alt="" />
                                            </div>
                                            <div className="h-[50px] w-full ">
                                                <p className='lg:font-medium text-center hover:underline'>{data?.name?.length > 30 ? data?.name.slice(0, 20) + '...' : data?.name}</p>
                                            </div>
                                        </a>
                                    </div>
                                </Link>)
                            }
                        </Slider>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;