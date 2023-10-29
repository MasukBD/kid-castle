import React, { useState } from 'react';
import image from '../assets/update toy/Update Toy.png';
import UseTitle from '../CustomHooks/UseTitle';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateToyData = () => {
    const product = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleUpdate = event => {
        event.preventDefault();
        const from = event.target;
        const productName = from.ProductName.value;
        const sellerName = from.SellerName.value;
        const productPhoto = from.ProductPhoto.value;
        const sellerEmail = from.SellerEmail.value;
        const category = from.category.value;
        const price = from.price.value;
        const ratings = from.ratings.value;
        const quantity = from.quantity.value;
        const productDetails = from.productDetails.value;
        const UpdatedProduct = {
            productName: productName,
            sellerName: sellerName,
            img: productPhoto,
            email: sellerEmail,
            category: category,
            productQuantiy: quantity,
            price: parseFloat(price),
            ratings: ratings,
            description: productDetails
        };
        fetch(`https://kid-castle-server.vercel.app/products/${product._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UpdatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
                from.reset();
                navigate('/myToys')
            })
    }

    UseTitle('Update Toy');
    return (
        <>
            <img src={image} alt="" />
            <div className='p-4 bg-pink-200 lg:p-8'>
                <form onSubmit={handleUpdate} className='w-full lg:w-11/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-9 mb-4'>
                        <div className='w-full'>
                            <label htmlFor="ProductName">
                                <span className='font-semibold'>1. Product Name</span>
                                <span className='text-red-500'>*</span>
                            </label>
                            <br />
                            <input defaultValue={product.productName} className='w-full p-2 rounded-md bg-pink-50' type="text" name="ProductName" id="ProductName" required placeholder='ex:Ferrari F9 Venture' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="SellerName">
                                <span className='font-semibold'>2. Seller Name</span>
                                <span className='text-red-500'>*</span>
                            </label>
                            <br />
                            <input className='w-full p-2 rounded-md bg-pink-50' required placeholder='ex:Abdul Alim' type="text" name="SellerName" defaultValue={user ? user.displayName : ''} id="SellerName" />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-9 mb-4'>
                        <div className='w-full'>
                            <label htmlFor="ProductPhoto">
                                <span className='font-semibold'>3. Product Photo</span>
                                <span className='text-red-500'>*</span>
                            </label>
                            <br />
                            <input defaultValue={product.img} className='w-full p-2 rounded-md bg-pink-50' type="url" name="ProductPhoto" id="ProductPhoto" required placeholder='Put Product Photo URL Here' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="SellerEmail">
                                <span className='font-semibold'>4. Seller Email Address</span>
                                <span className='text-red-500'>*</span>
                            </label>
                            <br />
                            <input className='w-full p-2 rounded-md bg-pink-50' required placeholder='example@kidCastle.com' type="email" name="SellerEmail" id="SellerEmail" defaultValue={user ? user.email : ''} />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-9 mb-4'>
                        <div className='w-full'>
                            <label htmlFor="ProductPhoto">
                                <span className='font-semibold'>5. Category</span>
                                <span className='text-red-500'>*</span>
                            </label>
                            <br />
                            <select defaultValue={product.category} required className='w-full p-2 rounded-md bg-pink-50' name="category" id="category">
                                <option value="Car/Sports Car">Car/Sports-Car</option>
                                <option value="Truck/Container">Truck/Container</option>
                                <option value="Bus">Bus</option>
                                <option value="Constraction Equipment">Constraction Equipment</option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <label htmlFor="SellerEmail">
                                <span className='font-semibold'>6. Available Quantity</span>
                                <span className='text-red-500'>*</span>
                            </label>
                            <br />
                            <input defaultValue={product.productQuantiy} className='w-full p-2 rounded-md bg-pink-50' required placeholder='Available Products Quantity Pcs' type="number" min={1} name="quantity" id="quantity" />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-9 mb-4'>
                        <div className='w-full'>
                            <label htmlFor="price">
                                <span className='font-semibold'>7. Price</span>
                                <span className='text-red-500'>*</span>
                            </label>
                            <br />
                            <input defaultValue={product.price} className='w-full p-2 rounded-md bg-pink-50' type="number" min={0} step="0.01" name="price" id="price" required placeholder='Price In $$' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="ratings">
                                <span className='font-semibold'>8. Ratings</span>
                            </label>
                            <br />
                            <input defaultValue={product.ratings} className='w-full p-2 rounded-md bg-pink-50' min={1} max={5} step="0.10" placeholder='Rating Usally Start with 1 and end at 5' type="number" name="ratings" id="ratings" />
                        </div>
                    </div>
                    <div className='mb-7'>
                        <label htmlFor="ProductDetails">
                            <span className='font-semibold'>9. Product Details</span>
                        </label>
                        <br />
                        <textarea defaultValue={product.description} className='w-full p-1 rounded-sm bg-pink-50' placeholder='Please Write A Product Details Description Here' name="productDetails" id="productDetails" cols="30" rows="10"></textarea>
                    </div>
                    <input className='custom-btn' type="submit" value="Update A Toy" />
                </form>
            </div>

        </>
    );
};

export default UpdateToyData;