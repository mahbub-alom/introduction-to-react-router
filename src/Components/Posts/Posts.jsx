import React from 'react';
import { useLoaderData} from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const datas=useLoaderData();
    return (
        <div>
            <h1>All Posts here</h1>
            <div className='grid md:grid-cols-3'>
                {
                    datas.map(data=><Post key={data.id} data={data}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;