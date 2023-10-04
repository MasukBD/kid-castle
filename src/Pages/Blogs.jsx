import React, { useState } from 'react';
import UseTitle from '../CustomHooks/UseTitle';
import Marquee from "react-fast-marquee";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Blogs = () => {
    const [loader, setLoader] = useState(false);
    const downloadReactPageAsPDF = () => {
        const capture = document.getElementById('Q&A');
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save('Interview_QA.pdf');
        })
    }
    UseTitle('Blogs');
    return (
        <div>
            <p className='text-center px-2 py-10 bg-pink-100 text-3xl font-bold'>Frequently Asked Interview Questions</p>
            <div id='Q&A' className='lg:w-11/12 w-full mx-auto my-3 px-3'>
                <div className='my-5'>
                    <h3 className='text-lg'> <span className='font-bold'>Question 1:</span> <span className='font-medium'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</span></h3>
                    <p className='my-1'>
                        <span className='font-bold'>Answer: </span>In JSON Web Tokens (JWT), access tokens and refresh tokens are used to facilitate secure and stateless authentication and authorization in web applications and APIs. <br />
                        <span className='ml-2'><strong>Access Token: </strong>Access tokens are short-lived tokens that are typically used to grant access to specific resources or services on behalf of a user. They represent the user's identity and the permissions they have.Access tokens have a relatively short expiration time, often measured in minutes or hours, to minimize the risk if they are compromised.  When a user authenticates and obtains an access token, they include it in their API requests to prove their identity and access protected resources.</span>
                        <br />
                        <span className='ml-2'><strong>Refresh Token: </strong>Refresh tokens are long-lived tokens that are used to obtain new access tokens when the original access token expires. They are primarily designed for security and to reduce the need for the user to re-enter their credentials frequently. Refresh tokens have a longer expiration time compared to access tokens, often measured in days or even weeks.When an access token expires or becomes invalid, the user can use a refresh token to request a new access token without having to re-enter their credentials (e.g., username and password). </span>
                        <br />
                        <span className='font-medium'>Access tokens and refresh tokens in JWTs work together in an authentication flow to grant access to resources while maintaining security. In client side basically both are stored in HttpOnlyCookie and local storage in some case memory as well.</span>
                    </p>
                </div>
                <div className='my-5'>
                    <h3 className='text-lg'> <span className='font-bold'>Question 2:</span> <span className='font-medium'>Compare SQL and NoSQL databases?</span></h3>
                    <div>
                        <p className='mb-3'>SQL (Structured Query Language) and NoSQL (Not Only SQL) databases are two broad categories of database management systems, each with its own strengths and weaknesses. Here's a comparison between the two:</p>
                        <div className="overflow-x-auto w-11/12 mx-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>SQL</th>
                                        <th>NoSQL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>SQL databases are relational databases that use tables to store structured data. Data is organized into rows and columns, and the schema is predefined. SQL databases are great for handling structured data with well-defined relationships between tables.</td>
                                        <td> NoSQL databases are non-relational databases that can handle various data structures, including structured, semi-structured, or unstructured data. NoSQL databases are more flexible in terms of data modeling and can adapt to changing data requirements.</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>SQL databases have a fixed schema, which means the structure of the data (table columns and data types) must be defined before data can be inserted. Schema changes can be complex and may require downtime in some cases.</td>
                                        <td>NoSQL databases are typically schema-less or schema-flexible. You can add new fields to documents or records without affecting existing data, making them suitable for dynamic and evolving data.</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <td>SQL databases use a structured query language (SQL) for querying and manipulating data. SQL is powerful and standardized, making it suitable for complex queries, joins, and transactions.</td>
                                        <td>NoSQL databases use various query languages or APIs, depending on the specific database type. These query languages are often tailored to the database's data model and may not support complex queries and transactions to the same extent as SQL.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='my-5'>
                    <h3 className='text-lg'>
                        <span className='font-bold'>Question 3:</span> <span className='font-medium'>What is express js? What is Nest JS?</span>
                    </h3>
                    <p className='my-1'>
                        Express.js is a lightweight and flexible framework that provides a foundation for building web applications in Node.js, while Nest.js is an opinionated framework built on top of Express.js, offering a structured and organized approach to building scalable and maintainable server-side applications. The choice between the two depends on your project's requirements, complexity, and your preference for architectural style.
                    </p>
                </div>
                <div className='my-5'>
                    <h3 className='text-lg'>
                        <span className='font-bold'>Question 4:</span> <span className='font-medium'>What is MongoDB aggregate and how does it work?</span>
                    </h3>
                    <p>
                        In MongoDB, the aggregate function is used to perform aggregation operations on the data stored in a collection. Aggregation is the process of transforming and processing data to obtain summary results, statistics, or computed values from the documents within a MongoDB collection. The aggregate function in MongoDB allows you to define a series of data processing steps, known as an aggregation pipeline, to manipulate and analyze data.
                    </p>
                    <br />
                    <span className='font-medium'>Here The list bellow how aggragate works:</span>
                    <ol>
                        <li><b>1.</b> Aggregation operations are defined as a sequence of pipeline stages. Each stage represents a specific operation or transformation applied to the data as it flows through the pipeline. Stages are executed in order, and the output of one stage becomes the input of the next stage.</li>
                        <li><b>2.</b> The aggregate function is typically called on a MongoDB collection and takes an array of pipeline stages as its argument. Each pipeline stage is an object that specifies an operation to be performed.</li>
                        <li><b>3.</b>MongoDB provides a variety of aggregation operators that you can use in different stages of the pipeline. Some common aggregation operators. Such as $match, $skip, $group, $sort etc.</li>
                        <li><b>4.</b>The final result of the aggregation is a cursor or an array of documents that represent the output of the aggregation pipeline. You can iterate over the cursor or work with the resulting documents in your application.</li>
                    </ol>
                </div>
            </div>
            <p className='text-center my-5'>
                <button
                    onClick={downloadReactPageAsPDF}
                    disabled={loader}
                    className=' text-white font-bold rounded-md bg-pink-500 p-3 hover:bg-pink-700'>
                    {loader ? <span>Downloading...</span> : <span>Download This page as pdf</span>}
                </button>
            </p>
            <Marquee className='my-5 font-bold'>
                Real web Content will be coming soon with Actual content...
            </Marquee>
        </div>
    );
};

export default Blogs;