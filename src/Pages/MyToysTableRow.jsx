import React from 'react';
import { FaTrash } from 'react-icons/fa';


const MyToysTableRow = ({ product }) => {
    const { _id, productName, img, category, price, ratings, productQuantiy } = product;
    return (
        <tr className='font-semibold'>
            <th>
                <button className='btn btn-outline btn-error'>
                    <FaTrash></FaTrash>
                </button>
            </th>
            <td>{productName}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{price}$</td>
            <td>{ratings}</td>
            <td>{productQuantiy}</td>
            <th>
                <button className="btn btn-outline btn-secondary">Update</button>
            </th>
        </tr>
    );
};

export default MyToysTableRow;