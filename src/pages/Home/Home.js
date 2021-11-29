import React from 'react';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <header>
                <Navbar/>
                <Banner/>
            </header>

        </div>
    );
};

export default Home;