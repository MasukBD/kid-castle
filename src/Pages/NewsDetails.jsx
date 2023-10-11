import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const NewsDetails = () => {
    const { id } = useParams();
    return (
        <div className='h-screen flex flex-col gap-2 items-center justify-center'>
            <h1 className='text-center text-3xl font-semibold'>The Details Page is Under Development!</h1>
            <p>The Details News Id: {id}</p>
            <Link to="/"><button className='btn btn-secondary btn-outline'>Back To Homepage <FaArrowRight></FaArrowRight></button></Link>
        </div>
    );
};

export default NewsDetails;