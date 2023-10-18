import React from 'react';
import { Link } from 'react-router-dom';

const AllToyTableRow = ({ product, singleId }) => {
    const { _id, productName, category, productQuantiy, price, ratings } = product;
    return (
        <tr className='font-semibold text-black'>
            <th>{singleId + 1}</th>
            <td>{productName}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{productQuantiy}</td>
            <td>{ratings}</td>
            <td><Link to={`/productDetails/${_id}`}><button className='p-1 text-white rounded-md bg-pink-600 hover:bg-pink-900'>Veiw Details</button></Link></td>
        </tr>
    );
};

export default AllToyTableRow;