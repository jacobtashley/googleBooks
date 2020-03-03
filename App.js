import React from 'react';
import Search from './Search'
import './App.css'
import Header from './Header'
import BookList from './BookList';

export class App extends React.Component {
  state = {
    books: []
  }

  callApi = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.value}`)
    .then( response => response.json() )
    .then(json => {
      console.log(json.items)
      this.setState({
        books: json.items,
      })
    })
  }
  

  render() {
    return (
      <div>
        <div>
          <Header />
          <Search callApiNow ={this.callApi}/>
          <BookList booklist={this.state.books}/>
        </div>
      </div>
    );
  }
}

export default App;