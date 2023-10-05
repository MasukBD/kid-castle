import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

const CustomerSayCard = ({ customer }) => {
    const { _id, customer_name, image_url, saying, rating } = customer;
    return (
        <div className='space-y-3 bg-pink-100 px-7 py-10 rounded-ss-lg rounded-br-lg rounded-se-3xl rounded-bl-3xl'>
            <div className='flex justify-between'>
                <div className='flex gap-4 items-center'>
                    <img className='w-20' src={image_url} alt="" />
                    <div>
                        <h3 className='font-bold'>{customer_name}</h3>
                        <Rating
                            readonly
                            placeholderRating={rating}
                            emptySymbol={<FaStar></FaStar>}
                            placeholderSymbol={<FaStar className='text-yellow-300'></FaStar>}
                        ></Rating>
                    </div>
                </div>
                <FaQuoteRight className='text-4xl md:text-7xl opacity-25'></FaQuoteRight>
            </div>
            <p>{saying}</p>
        </div>
    );
};

export default CustomerSayCard;