import React from 'react';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import About from '../components/About';
import Gallery from '../components/Gallery';

const Home = () => {
    return (
        <>
            <Hero/>
            <Featured/>
            <About/>
            <Gallery/>
        </>
    );
};

export default Home;