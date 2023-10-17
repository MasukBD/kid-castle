import React from 'react';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';


const ProductCard = ({ product }) => {
    const { _id, productName, img, category, price, ratings } = product;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p><b>Price: </b><span className='text-pink-500 font-semibold'>{price} $</span></p>
                <p>
                    <b>Ratings: </b>
                    <Rating
                        readonly
                        placeholderRating={ratings}
                        emptySymbol={<FaStar></FaStar>}
                        placeholderSymbol={<FaStar className='text-yellow-300'></FaStar>}
                    ></Rating>
                    <span>{ratings}</span>
                </p>
                <div className="card-actions">
                    <button className='btn btn-outline w-full btn-secondary'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;