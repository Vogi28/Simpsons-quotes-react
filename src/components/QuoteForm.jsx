import React, { Component } from 'react';
import './QuoteForm.css';

const MAX_LENGTH = 20;

class QuoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            character : "",
            chaSubmit : ""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({chaSubmit : this.state.character})
    }

    handleChange = (e) => {
        if (e.target.value.length > MAX_LENGTH) {
            return;
        }
        this.setState({character : e.target.value});
    }

    render () {
        const maxReached = this.state.character.length >= MAX_LENGTH;

        const numRemaining = MAX_LENGTH - this.state.character.length;

        return (
            <div>
                <form className="QuoteForm" onSubmit={this.handleSubmit} >
                    <label htmlFor="character">Character</label>
                    <input className={maxReached ? 'length-maximum-reached' : 'length-ok'} type="text" name="character" id="name" value={this.state.character} onChange={this.handleChange}/>
                </form>
                <small className="remaining-characters">
                    {numRemaining} Remaining characters
                </small>
                <h3>{this.state.chaSubmit}</h3>
            </div>
        )
    };
}

export default QuoteForm;