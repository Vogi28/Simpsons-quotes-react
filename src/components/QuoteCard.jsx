// import React from 'react';
import React, { useState } from 'react'
import './QuoteCard.css';

// class QuoteCard extends React.Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       favorite : false
//     };
//   }
const QuoteCard = ({image, quote, character}) => {

  const [favorite, setFavorite] = useState(false)

  const handleClick = (e) => {
    //this.setState({favorite : !this.state.favorite});
    setFavorite(!favorite);
    console.log(favorite);
  }

  //render () {
    return (
      <div>
        <figure className="QuoteCard">
       <img src={image} alt={character}/>
    <figcaption>
        <blockquote>
            {quote}
        </blockquote>
        <p>
          <cite>{character}</cite>
          <span className={favorite ? 'is-favorite' : ''} onClick={handleClick}>&#9733;</span>
        </p>
    </figcaption>
  </figure>
  </div>
    );
  }

export default QuoteCard;