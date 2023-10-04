import React from 'react';
import UseTitle from '../../CustomHooks/UseTitle';
import Banner from './Banner';
import ImageGallery from './ImageGallery';

const Home = () => {
    UseTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <ImageGallery></ImageGallery>
        </div>
    );
};

export default Home;