import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductCard from './ProductCard';

const ProductsByCategory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='my-8 lg:my-16 p-5 w-full lg:w-11/12 mx-auto'>
            <h1 className=' mt-10 text-center font-semibold text-2xl lg:text-5xl'>Products</h1>
            <h3 className='text-center text-lg font-semibold mb-3 text-pink-400'>Shop By Category</h3>
            <Tabs>
                <TabList className="grid grid-cols-3 lg:grid-cols-5 bg-pink-200 border-2 border-pink-200">
                    <Tab className="font-semibold w-full text-center hover:bg-pink-500 py-2">All Toys</Tab>
                    <Tab className="font-semibold w-full text-center hover:bg-pink-500 py-2">Cars</Tab>
                    <Tab className="font-semibold w-full text-center hover:bg-pink-500 py-2">Trucks</Tab>
                    <Tab className="font-semibold w-full text-center hover:bg-pink-500 py-2">Buses</Tab>
                    <Tab className="font-semibold w-full text-center hover:bg-pink-500 py-2">Equipment</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 my-4'>
                        {
                            products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 my-4'>
                        {
                            products.filter(product => product.category == "Car/Sports Car").map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 my-4'>
                        {
                            products.filter(product => product.category == "Truck/Container").map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 my-4'>
                        {
                            products.filter(product => product.category == "Bus").map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 my-4'>
                        {
                            products.filter(product => product.category == "Constraction Equipment").map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ProductsByCategory;