import React from 'react';
import UseTitle from '../CustomHooks/UseTitle';
import image1 from '../assets/my toy/My Toys.png';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useEffect } from 'react';
import MyToysTableRow from './MyToysTableRow';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Swal from 'sweetalert2';


const MyToys = () => {
    const [myProducts, setMyProducts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/products?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    });

    const handleDeleteProduct = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/products/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    UseTitle('My Toys');
    return (
        <>
            <img src={image1} alt="" />
            {
                myProducts.length == 0 ?
                    <div>
                        <p className='mt-10 mb-3 text-xl lg:text-3xl text-center font-semibold'>You Have not Added Any Product Yet!</p>
                        <Link to="/addAToy" className='flex justify-center items-center'><button className='mb-7 text-white bg-pink-500 hover:bg-pink-700 rounded-md p-2 font-semibold flex justify-center items-center'>Add Toy  <FaArrowRight></FaArrowRight></button></Link>
                    </div>
                    :
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
                                    myProducts.map(product => <MyToysTableRow handleDelete={handleDeleteProduct} key={product._id} product={product}></MyToysTableRow>)
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </>
    );
};

export default MyToys;