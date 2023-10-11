import React from 'react';
import { Link } from 'react-router-dom';

const HomeNewsCard = ({ eachNews }) => {
    const { _id, title, image, date, author } = eachNews;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img className='h-64' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p><b>Author: </b> <span className='text-pink-500'>{author}</span></p>
                <p><b>Published at: </b><span>{date}</span></p>
                <div className="card-actions justify-end">
                    <Link to={`/newsDetails/${_id}`}><button className="btn btn-outline btn-secondary">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeNewsCard;