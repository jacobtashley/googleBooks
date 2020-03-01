import React from 'react';
import Header from './Header'
import Search from './Search';
import BookList from './Booklist'
import './App.css'

export class App extends React.Component {
  state = {
    books: []
  }

  handleSubmitForm = ({title, printType, bookType}) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=game`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .then(body => this.setState({books: body}))
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