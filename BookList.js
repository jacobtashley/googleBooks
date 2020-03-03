import React, { Component } from 'react';
import Book from './Book'

export default class BookList extends Component {
    render(){
        return(
            <ul>
                <Book books={this.props.books}/>
            </ul>
        )
    }
}