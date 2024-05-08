import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import './home.css';
import { base_url } from './baseurl';
const Home = () => {
    const [quote, setQuote] = useState("");
    const [author,setAuthor ] = useState("");
    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch(`${base_url}`);
                const data = await response.json();
                setQuote(data.text);
                setAuthor(data.author); 
            } catch (error) {
                console.error('Error fetching quote:', error);
            }
        };

        fetchQuote();
    }, []); 

    const handleClick = async () => {
        try {
            const response = await fetch(`${base_url}`);
            const data = await response.json();
            setQuote(data.text); 
            setAuthor(data.author); 
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className='classbody'>
                <div className="container">
                    <div className="header">
                        <h1>Quote of the Moment</h1>
                    </div>

                    <div className="main-content">
                        <div className="text-area">
                            <span className="quote">{quote}</span>
                        </div>

                        <div className="writer">{author}</div>
                    </div>
                    <div className="button-area">
                            <div className="btn header">
                                <button  onClick={handleClick}>New Quote</button>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Home;
