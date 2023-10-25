import React from 'react';
import UseTitle from '../CustomHooks/UseTitle';
import image1 from '../assets/All toy/ALL TOYS.png';
import AllToyTableRow from './AllToyTableRow';
import { useState } from 'react';
import { useEffect } from 'react';

const AllToys = () => {

    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 20;


    useEffect(() => {
        fetch(`https://kid-castle-server.vercel.app/products?page=${currentPage}&limit=${itemPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage, itemPerPage]);


    useEffect(() => {
        fetch('https://kid-castle-server.vercel.app/productCount')
            .then(res => res.json())
            .then(data => setProductCount(data))
    }, []);

    const { numberOfProduct } = productCount;
    const totalPage = Math.ceil(numberOfProduct / itemPerPage);

    const pageNuber = [];
    for (let i = 1; i <= totalPage; i++) {
        pageNuber.push(i);
    };

    UseTitle('All Toys');
    return (
        <>
            <img src={image1} alt="" />
            <h1 className='text-center font-semibold text-2xl my-5'>Total Products: {numberOfProduct}</h1>
            <div className="overflow-x-auto my-10 px-5">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Ratings</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <AllToyTableRow key={product._id} product={product} singleId={i}></AllToyTableRow>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="join flex justify-center my-7">
                {
                    pageNuber.map(number => <button onClick={() => setCurrentPage(number)} className={currentPage == number ? "join-item btn btn-secondary btn-outline bg-pink-500" : "join-item btn btn-secondary btn-outline"} key={number}>{number}</button>)
                }
            </div>

        </>
    );
};

export default AllToys;