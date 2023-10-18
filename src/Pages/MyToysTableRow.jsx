import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MyToysTableRow = ({ product, handleDelete }) => {
    const { _id, productName, img, category, price, ratings, productQuantiy } = product;
    return (
        <tr className='font-semibold'>
            <th>
                <button onClick={() => handleDelete(_id)} className='btn btn-outline btn-error'>
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
            <td>{ratings ? ratings : ''}</td>
            <td>{productQuantiy}</td>
            <th>
                <Link to={`/updateToy/${_id}`}><button className="btn btn-outline btn-secondary">Update</button></Link>
            </th>
        </tr>
    );
};

export default MyToysTableRow;