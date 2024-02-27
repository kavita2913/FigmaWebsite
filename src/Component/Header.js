import React from 'react';
import './header.scss';
// import SearchIcon from '@mui/icons-material/Search';
import meeshoSearch from '../Image/search.png';

const Header = () => {
    return (
        <div className="container">
        <div className='searchbar'>
            <div className='searchInput'>
                <div className='iconSearch'>
                    <img src={meeshoSearch} alt="Search" />
                </div>
                <input className='searchInput1' type='text' />
            </div>
            <div className='navbar'>
                <ul className="nav">
                    <li>Categories</li>
                    <li>Website Builders</li>
                    <li>Today's Details</li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Header;
