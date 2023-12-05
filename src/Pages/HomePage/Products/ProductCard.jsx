import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import React from 'react';

import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
    const { _id, productName, img, category, price, ratings } = product;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p><b>Price: </b><span className='text-pink-500 font-semibold'>{price} $</span></p>
                <div className='flex gap-1 item-center'>
                    <b>Ratings: </b>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={ratings}
                        readOnly
                    />
                    <span className='font-semibold'>{ratings ? ratings : 'No Ratings'}</span>
                </div>
                <div className="card-actions">
                    <Link to={`/productDetails/${_id}`}><button className='btn btn-outline w-full btn-secondary'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;