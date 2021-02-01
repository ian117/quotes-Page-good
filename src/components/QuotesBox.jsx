import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import Quote from './Quote'
import '../App.css';

const QuotesBox = ({quote, author, onQuoteChangeDoThis}) => (
    <div className="quoteBox">
        <Quote quote={quote} author={author}/>
        <div className="buttonsDiv">
        <a
                    className='btn'
                    href={`https://twitter.com/intent/tweet?text=${quote}-${author}`}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
        <button className="btn" onClick={onQuoteChangeDoThis}>
            New Quote
        </button>
        </div>
    </div>
)

export default QuotesBox;