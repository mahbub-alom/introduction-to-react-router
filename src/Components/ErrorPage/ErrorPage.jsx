import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error= useRouteError()
    console.log(error)
    return (
        <div className='text-center text-5xl'>
            <h1>Oops!!!!</h1>
            <p>{error.statusText || error.status}</p>
            <button className='bg-blue-500 text-white p-2 rounded-md'><Link to="/">Home</Link></button>
        </div>
    );
};

export default ErrorPage;