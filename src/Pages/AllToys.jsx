import React from 'react';
import UseTitle from '../CustomHooks/UseTitle';
import image1 from '../assets/All toy/ALL TOYS.png';

const AllToys = () => {

    UseTitle('All Toys');
    return (
        <div>
            <img src={image1} alt="" />
        </div>
    );
};

export default AllToys;