import React from 'react';
import '../App.css';


const Quote = ({quote, author}) => (
    <div>
        <h1 className='quote'>" {quote} "</h1>
        <h3 className='author'> -{author}</h3>
    </div>
)

export default Quote;