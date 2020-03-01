import React, {Component} from 'react';

export default class Search extends Component {
    render() {
        let searchBox = $('.searchInput').val();
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchBox}`

        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);            
            }) 
        
        return(
            
            <div className="search">
                Search: <input className='searchInput' type="text"></input>
                <button>Search</button>
            </div>
        )
    }
}