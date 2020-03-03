import React, { Component } from 'react';

export default class Book extends Component {
    render(){
        return(
            this.books.map(item => (
              <li key={item.id}>
                Title: {item.volumeInfo.title} 
                <br></br>
                Author: {item.volumeInfo.authors}
                <br></br>
                Image:<img src= {item.volumeInfo.imageLinks.thumbnail}></img>
              </li>
            ))
        )
    }
}