import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Posts.css'

const Posts = ({post}) => {
    const {id,title,body} = post;
    const navigate = useNavigate();
    const handleNavigate =() =>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='posts'>
            <p>Title: {title}</p>
            <p>{body}</p>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Show Details handelar</button>
        </div>
    );
};

export default Posts;