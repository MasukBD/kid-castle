import React from 'react';
import UseTitle from '../../CustomHooks/UseTitle';
import Banner from './Banner';

const Home = () => {
    UseTitle('Home');
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;