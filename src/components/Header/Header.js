import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/product'>Product</NavLink>
                <NavLink to='/post'>Post</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
            </nav>
            <h3>This is common page</h3>
        </div>
    );
};

export default Header;