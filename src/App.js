import './App.css';
import React, { useState } from 'react';
import data from './quotes.json';
import QuotesBox from './components/QuotesBox';

function App() {

  const getRandomIndex = (lengthOfArray) => (
    Math.floor(Math.random() * lengthOfArray)
  )

  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const jsonQuotes = data["quotes"];
  const lenghtOfQuotes = jsonQuotes.length;
  const randomQuoteIndex = getRandomIndex(lenghtOfQuotes);

  const [quote, setQuote] = useState(jsonQuotes[randomQuoteIndex])
  const [color, setColor] = useState(getRandomColor())

  const handleClick = () => {
  const anotherRandomQuote = getRandomIndex(lenghtOfQuotes);

  setQuote(jsonQuotes[anotherRandomQuote]);
  setColor(getRandomColor())
  }

  return (
    <div className='App' style={{ '--current-color': `${color}` }}>
     <QuotesBox quote={quote.quote} author={quote.author} onQuoteChangeDoThis={handleClick}/>
    </div>
  );
}

export default App;
