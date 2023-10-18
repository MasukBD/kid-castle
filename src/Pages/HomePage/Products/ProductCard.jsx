import React from 'react';
import Rating from 'react-rating';
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
                <p>
                    <b>Ratings: </b>
                    <Rating
                        readonly
                        placeholderRating={ratings && ratings}
                        emptySymbol={<FaStar></FaStar>}
                        placeholderSymbol={<FaStar className='text-yellow-300'></FaStar>}
                    ></Rating>
                    <span>{ratings ? ratings : 'No Ratings'}</span>
                </p>
                <div className="card-actions">
                    <Link to={`/productDetails/${_id}`}><button className='btn btn-outline w-full btn-secondary'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;