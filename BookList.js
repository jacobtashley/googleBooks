import React, { Component } from 'react';
import Book from './Book'

export default class BookList extends Component {
    render(){
        return(
            <ul>
                <Book booklist={this.props.books}/>
            </ul>
        )
    }
}