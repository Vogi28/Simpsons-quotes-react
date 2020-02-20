import React from 'react';
import './QuoteCard.css';

class QuoteCard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      favorite : false
    };
  }

  handleClick = (e) => {
    this.setState({favorite : !this.state.favorite});
    console.log(this.state.favorite);
  }

  render () {
    return (
      <div>
        <figure className="QuoteCard">
       <img src={this.props.image} alt={this.props.character}/>
    <figcaption>
        <blockquote>
            {this.props.quote}
        </blockquote>
        <p>
          <cite>{this.props.character}</cite>
          <span className={this.state.favorite ? 'is-favorite' : ''} onClick={this.handleClick}>&#9733;</span>
        </p>
    </figcaption>
  </figure>
  </div>
    );
  }
}

export default QuoteCard;