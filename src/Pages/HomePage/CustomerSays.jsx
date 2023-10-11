import React, { useEffect, useState } from 'react';
import CustomerSayCard from './CustomerSayCard';

const CustomerSays = () => {
    const [customerSays, setCustomerSays] = useState([]);
    const [more, setMore] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/customerSays')
            .then(res => res.json())
            .then(data => setCustomerSays(data))
    }, [])
    return (
        <div className='my-6 lg:my-14'>
            <h1 className='text-xl lg:text-5xl font-semibold text-center'>Customer Says</h1>
            <p className='text-center text-pink-500 my-1'>CUSTOMER TESTIMONIALS</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 lg:px-16 my-5'>
                {
                    more ?
                        customerSays.map(customer => <CustomerSayCard key={customer._id} customer={customer}></CustomerSayCard>) : customerSays.slice(0, 2).map(customer => <CustomerSayCard key={customer._id} customer={customer}></CustomerSayCard>)
                }
            </div>
            {more ? < p className='text-center mt-5 mb-10'><button onClick={() => setMore(!more)} className='btn btn-outline btn-secondary'>See Less</button></p> : < p className='text-center mt-5 mb-10'><button onClick={() => setMore(!more)} className='btn btn-outline btn-secondary'>See More</button></p>}
        </div >
    );
};

export default CustomerSays;