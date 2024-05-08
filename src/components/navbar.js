import React, { useState } from 'react';
import './navbar.css'; 
import { Link } from 'react-router-dom';
import logo from './logo.jpeg'
import { useNavigate } from 'react-router-dom';
import { base_url } from './baseurl';
const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const Navigate = useNavigate()
    const handleSearch = async () => {
        if (searchQuery.trim() !== "") {
            try {
                const response = await fetch(`${base_url}search?q=${searchQuery}`);
                const data = await response.json();
                if(response.ok){
                    Navigate("/search", {state:data});
                }
            } catch (error) {
                console.error('Error searching:', error);
            }
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <img src={logo} alt="Logo" className="logo" style={{ height: '40px', width: 'auto', marginRight: '10px' }} />
                    </li>
                    <li className='nav-item'>Quotemate</li> 
                </ul>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
            </ul>
            <div className="search-box">
                <input 
                    type="text" 
                    placeholder="Write author name..." 
                    className="search-input" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button className="search-button" onClick={handleSearch}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
