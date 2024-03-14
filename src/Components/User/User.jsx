import React from 'react';

const User = ({user}) => {
    const {name,email}=user
    return (
        <div className='m-5 border-2 border-red-500 p-5 rounded-md'>
            <h1>{name}</h1>
            <h2>{email}</h2>
        </div>
    );
};

export default User;