import React from 'react';
import Slider from '../components/Slider';
import Devs from '../components/Devs';
import Intro from '../components/Intro';
import Bunner from '../components/Bunner';


const Home = () => {

    return (
        <div>
            <Slider/>
            <Intro />
            <Bunner />
            <Devs/>

        </div>
    );
}

export default Home;