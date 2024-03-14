import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const details=useLoaderData();
    const {title,body,id}=details;
    const navigate=useNavigate()

    const {postId}=useParams()
    // console.log(postId)


    const handleGoBack=()=>{
        navigate(-1)
    }

    return (
        <div className='w-96 m-auto'>
            <h1>{id}</h1>
            <h1 className='border-2 m-3 p-3 rounded-md border-red-500'>Title: {title}</h1>
            <p className='border-2 m-3 p-3 rounded-md border-red-500'>{body}</p>
            <button onClick={handleGoBack} className="bg-blue-500 text-white rounded-md p-2 m-2">Go Back</button>
        </div>
    );
};

export default PostDetails;