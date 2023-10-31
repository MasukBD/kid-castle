import React, { useRef } from 'react';
import UseTitle from '../CustomHooks/UseTitle';
import image1 from '../assets/All toy/ALL TOYS.png';
import AllToyTableRow from './AllToyTableRow';
import { useState } from 'react';
import { useEffect } from 'react';

const AllToys = () => {

    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(0);
    const [sortedPrice, setSortedPrice] = useState("true");
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const searchRef = useRef(null);
    const itemPerPage = 20;

    useEffect(() => {
        fetch(`https://kid-castle-server.vercel.app/products?page=${currentPage}&limit=${itemPerPage}&sort=${sortedPrice === "true" ? 'true' : 'false'}&search=${search}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage, itemPerPage, sortedPrice, search]);


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

    const handleSortPrice = event => {
        setSortedPrice(event.target.value)
    }

    console.log(sortedPrice)

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }

    UseTitle('All Toys');
    return (
        <>
            <img src={image1} alt="" />
            <h1 className='text-center font-semibold text-2xl my-5'>Total Products: {numberOfProduct}</h1>
            <div className='my-6 px-6 flex flex-col lg:flex-row gap-6 justify-between items-center'>
                <div className="form-control px-5">
                    <div className="input-group">
                        <input ref={searchRef} type="text" placeholder="Search by category" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <select onChange={handleSortPrice} className="select select-secondary w-full max-w-xs">
                    <option value="true">Price Low To High</option>
                    <option value="false">Price High To Low</option>

                </select>
            </div>
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