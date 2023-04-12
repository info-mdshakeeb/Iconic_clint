import React from 'react';
import CatagoriesSection from '../../Components/Home Components/CatagorysSection';
import HeroSection from '../../Components/Home Components/HreoSection';
import ProductsSection from '../../Components/Home Components/ProductsSection';
import RandomSection from '../../Components/Home Components/RandomSection';
import ShopsSection from '../../Components/Home Components/ShopsSection';

const Home = () => {

    return (
        <div className='bg-slate-50  '>
            <div className="">
                <HeroSection />
                <CatagoriesSection />
                <ShopsSection />
                <ProductsSection />
                <RandomSection />

            </div>
        </div>
    );
};
export default Home;