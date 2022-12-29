import React from 'react';
import Footer from '../../Components/Footer';
import Catagorys from '../../Components/Home Components/Catagorys';
import Hreo from '../../Components/Home Components/Hreo';
import Products from '../../Components/Home Components/Products';
import Shops from '../../Components/Home Components/Shops';

const Home = () => {

    return (
        <div className='bg-slate-100  '>
            <Hreo />
            <Catagorys />
            <Shops />
            <Products />
            <Footer />
        </div>

    );
};

export default Home;