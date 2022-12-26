import React from 'react';

const Hreo = () => {
    return (
        <div className='container px-6 h-full min-h-[calc(100vh_-_400px)] m-auto mb-4'>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img alt='' src="https://media.e-valy.com/cms/products/images/d6306c1a-a833-454e-bd22-b05f0b5213ce" className="w-full h-full" />
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
            </div>
        </div>
    );
};

export default Hreo;