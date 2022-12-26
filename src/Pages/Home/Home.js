import React, { useContext } from 'react';
import { AuthUser } from '../../Context/UserContext';

const Home = () => {
    const { name } = useContext(AuthUser)
    return (
        <div>
            home
        </div>
    );
};

export default Home;