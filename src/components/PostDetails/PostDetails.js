import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, body, title,userId} = post;
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate(`/friend/${userId}`)
    }

    return (
        <div>
            <h2>Details about post: {id}</h2>
            <h4>Title: {title}</h4>
            <p>{body}</p>
            <button onClick={handleNavigate}>Get the Author</button>
        </div>
    );
};

export default PostDetails;