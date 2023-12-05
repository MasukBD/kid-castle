import React from 'react';
import Header from '../Pages/SharedPage/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/SharedPage/Footer';
import ScrollToTop from '../Pages/SharedPage/ScrollOnTop';

const Main = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;