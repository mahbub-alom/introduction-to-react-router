import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users=useLoaderData();
    return (
        <div>
            <h2>users here</h2>
            <div className='grid md:grid-cols-3'>
                {
                    users.map((user,id)=><User user={user} key={id}></User>)
                }
            </div>
        </div>
    );
};

export default Users;