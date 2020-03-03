import React, { Component } from 'react';

export default class Book extends Component {
    render(){
        return(
            this.books.map(item => (
              <li key={this.props.item.id}>
                Title: {this.props.item.volumeInfo.title} 
                <br></br>
                Author: {this.props.item.volumeInfo.authors}
                <br></br>
                Image:<img src= {this.props.item.volumeInfo.imageLinks.thumbnail} alt="a cat in hand"></img>
              </li>
            ))
        )
    }
}