import React from 'react';
import UseTitle from '../../CustomHooks/UseTitle';
import Banner from './Banner';
import ImageGallery from './ImageGallery';
import CustomerSays from './CustomerSays';
import CompanyLogo from './CompanyLogo';
import HomeNews from './HomeNews';
import Support from './Support';
import Subscribe from './Subscribe';

const Home = () => {
    UseTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <ImageGallery></ImageGallery>
            <CustomerSays></CustomerSays>
            <CompanyLogo></CompanyLogo>
            <HomeNews></HomeNews>
            <Subscribe></Subscribe>
            <Support></Support>
        </div>
    );
};

export default Home;