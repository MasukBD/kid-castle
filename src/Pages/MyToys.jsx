import React from 'react';
import UseTitle from '../CustomHooks/UseTitle';
import image1 from '../assets/my toy/My Toys.png';


const MyToys = () => {

    UseTitle('My Toys');
    return (
        <>
            <img src={image1} alt="" />
        </>
    );
};

export default MyToys;