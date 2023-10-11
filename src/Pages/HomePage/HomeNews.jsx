import React, { useEffect, useState } from 'react';
import HomeNewsCard from './HomeNewsCard';
import { FaArrowRight } from 'react-icons/fa';

const HomeNews = () => {
    const [news, setNews] = useState([]);
    const [show, setShow] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/news&events')
            .then(res => res.json())
            .then(data => setNews(data))
    }, []);

    return (
        <div className='my-8 md:my-16'>
            <h1 className='text-center text-xl md:text-5xl font-semibold'>News and Events</h1>
            <p className='text-center text-pink-500 mt-1 mb-5'>OUR LATEST NEWS & EVENTS</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-3 w-full lg:w-11/12 mx-auto'>
                {
                    show ? news.slice(0, 3).map(nw => <HomeNewsCard key={nw._id} eachNews={nw}></HomeNewsCard>) : news.map(nw => <HomeNewsCard key={nw._id} eachNews={nw}></HomeNewsCard>)
                }
            </div>
            {
                show && <p className='text-center mt-5'><button onClick={() => setShow(false)} className='btn btn-outline btn-secondary'>Show All <FaArrowRight></FaArrowRight></button></p>
            }
        </div>
    );
};

export default HomeNews;