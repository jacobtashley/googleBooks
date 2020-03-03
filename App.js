import React from 'react';
import Search from './Search'
import './App.css'
import Header from './Header'
import BookList from './BookList';

export class App extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=cat`)
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
          <Search />
          <BookList booklist={this.props.books} />
        </div>
      </div>
    );
  }
}

export default App;

/*

ListComponent => {lists.map(item => <ItemComponent item={item} />)}
*/