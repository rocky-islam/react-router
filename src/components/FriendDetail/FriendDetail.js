import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    // console.log(friend);
    
    return (
        <div>
            <h1>Details About: {friend.name}</h1>
            <p>Call Him/Her: {friend.phone}</p>
            <p>Website: {friend.website}</p>
            <h2>Friends Details</h2>
        </div>
    );
};

export default FriendDetail;