import React, { useEffect, useState } from 'react';
import CatagoriesSection from '../../Components/Home Components/CatagorysSection';
import HreoSection from '../../Components/Home Components/HreoSection';
import ProductsSection from '../../Components/Home Components/ProductsSection';
import ShopsSection from '../../Components/Home Components/ShopsSection';

const Home = () => {
    const [loadingM, setLoadingM] = useState(false);
    useEffect(() => {
        setLoadingM(true)
        setTimeout(() => {
            setLoadingM(false)
        }, 1200)
    }, [])
    return (
        <div className='bg-slate-50  '>
            <div className="">
                <HreoSection />
                <CatagoriesSection />
                <ShopsSection />
                <ProductsSection />
                {/* <BodyLoadingScreen /> */}
            </div>
        </div>
    );
};
export default Home;