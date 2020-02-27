// import React from 'react';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import QuoteCard from './QuoteCard';

const QuoteList = () => {

  const [quotes, setQuotes] = useState(null);
 
  useEffect(() => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=4').then(response => {
      setQuotes(response.data);
    });
  }, []);
  
  const handleQuotes = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=4').then(response => {
      setQuotes(response.data);
    });
  };
  
    return (
        <div>  
        {
          quotes ? quotes.map(item => (<QuoteCard image={item.image} quote={item.quote} character={item.character} />)) : <div>No Quotes</div>
        }
        <button className="refreshQuotes" onClick={handleQuotes}>Refresh Quotes</button>
      </div>
    );
};

export default QuoteList;