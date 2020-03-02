import React from 'react';
import Header from './Header'
import Search from './Search';
import BookList from './BookList'
import './App.css'

export class App extends React.Component {
  state = {
    books: []
  }

  handleSubmitForm = (title) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header />
        <Search submitForm={this.handleSubmitForm} />
        <BookList books={this.state.books} />
      </div>
    );
    }
}

export default App;

/*

ListComponent => {lists.map(item => <ItemComponent item={item} />)}
*/