import React from 'react';
import UseTitle from '../CustomHooks/UseTitle';
import image1 from '../assets/All toy/ALL TOYS.png';
import { useLoaderData } from 'react-router-dom';
import AllToyTableRow from './AllToyTableRow';

const AllToys = () => {
    const products = useLoaderData();

    UseTitle('All Toys');
    return (
        <>
            <img src={image1} alt="" />
            <div className="overflow-x-auto my-10 px-5">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
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

        </>
    );
};

export default AllToys;