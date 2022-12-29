import React from 'react';
import Catagorys from '../../Components/Home Components/Catagorys';
import Hreo from '../../Components/Home Components/Hreo';
import Products from '../../Components/Home Components/Products';
import Shops from '../../Components/Home Components/Shops';

const Home = () => {

    return (
        <div className='bg-slate-50  '>
            <div className="">
                <Hreo />
                <Catagorys />
                <Shops />
                <Products />
            </div>
        </div>
    );
};
export default Home;