import React from 'react';
import CatagorysSection from '../../Components/Home Components/CatagorysSection';
import HreoSection from '../../Components/Home Components/HreoSection';
import ProductsSection from '../../Components/Home Components/ProductsSection';
import ShopsSection from '../../Components/Home Components/ShopsSection';

const Home = () => {

    return (
        <div className='bg-slate-50  '>
            <div className="">
                <HreoSection />
                <CatagorysSection />
                <ShopsSection />
                <ProductsSection />
                {/* <BodyLoadingScreen /> */}
            </div>
        </div>
    );
};
export default Home;