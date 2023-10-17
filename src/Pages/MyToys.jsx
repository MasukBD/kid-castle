import React from 'react';
import UseTitle from '../CustomHooks/UseTitle';
import image1 from '../assets/my toy/My Toys.png';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useEffect } from 'react';
import MyToysTableRow from './MyToysTableRow';


const MyToys = () => {
    const [myProducts, setMyProducts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/products?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    })
    UseTitle('My Toys');
    return (
        <>
            <img src={image1} alt="" />
            <div className="overflow-x-auto my-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-md'>
                            <th>Removal</th>
                            <th>Product Name</th>
                            <th>Photo</th>
                            <th>Price</th>
                            <th>Ratings</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map(product => <MyToysTableRow key={product._id} product={product}></MyToysTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyToys;