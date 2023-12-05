import React from 'react';
import { useLoaderData } from 'react-router-dom';
import image from '../../../assets/Toy details/Toy details.png';
import { useState } from 'react';
import { FaCartArrowDown, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ProductDetailsPage = () => {
    const [more, setMore] = useState(true);
    const product = useLoaderData();
    const { _id, productName, sellerName, img, email, category, productQuantiy, price, ratings, description } = product;
    return (
        <>
            <img src={image} alt="" />
            <div className='grid my-10 w-full lg:w-2/3 mx-auto lg:my-16 grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 border border-pink-400 rounded-md p-4'>
                <div>
                    <img src={img} alt="" />
                    <h1 className='font-semibold text-lg lg:text-2xl text-center'>{productName}</h1>
                </div>
                <div className='space-y-2'>
                    <p><b>Descriptions: </b><span>{more ? description.substring(0, 312) : description}</span>{more ? <button onClick={() => setMore(!more)} className='text-blue-600'>See More</button> : <button className='text-blue-600' onClick={() => setMore(!more)}>See Less</button>}</p>
                    <h4 className='font-semibold'><b>Category: </b>{category}</h4>
                    <h4 className='font-semibold'><b>Seller: </b>{sellerName}</h4>
                    <h4 className='font-semibold'><b>Contact: </b>{email}</h4>
                    <div className='flex gap-2 item-center'><b>Ratings: </b>
                        <Rating
                            style={{ maxWidth: 140 }}
                            value={ratings}
                            readOnly
                        />
                        <span className='font-bold'> {ratings}</span>
                    </div>
                    <h4 className='font-semibold'><b>Quantity: </b>{productQuantiy} Remaining</h4>
                    <h2 className='font-semibold text-xl'><span>Price: </span><span className='text-pink-500'>{price} $</span></h2>
                    <button className='custom-btn'>Buy Now <FaCartArrowDown></FaCartArrowDown></button>
                </div>

            </div>
        </>
    );
};

export default ProductDetailsPage;