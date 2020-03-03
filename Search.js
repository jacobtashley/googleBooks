import React, { Component } from 'react';

let prints = ['all', 'books', 'magazines']
let types =['partial','full','free-ebooks','paid-ebooks','ebooks',]

export default class Search extends Component {
    state = {
        title: ' ',

        printType: prints[0],
        bookType: types[0],
    }

    handleTitleChange = event => {
        this.setState({
            title: event.target.value
        })
    }

    handlePrintTypeChange = (e) => {
        this.setState({printType: e.target.value})
    }

    handleBookTypeChange = (e) => {
        this.setState({bookType: e.target.value})
    }

    handleSubmit = event => {
        alert(`${this.state.title} ${this.state.printType} ${this.state.bookType}`) 
        event.preventDefault()
    }

    render() {
        return (
            <form className="search" onSubmit={this.handleSubmit}>
                <label htmlFor="title"> Search: <input className='searchInput' type="text" id="title" onChange={this.handleTitleChange} value={this.state.title}></input></label>
                <button type="submit">Search</button>

                <div className="types">
                    <label htmlFor="printType">Print Type:
                        <select className="printType" id="printType" value={this.state.printType} onChange={this.handlePrintTypeChange}>
                            {prints.map(v => <option value={v} key={v}>{v}</option>)}
                        </select>
                    </label>
                    <label htmlFor="bookType">Book Type: 
                        <select className="bookType" value={this.state.bookType} onChange={this.handleBookTypeChange}>
                            {types.map(v => <option value={v} key={v}>{v}</option>)}
                        </select>
                        </label>
                </div>
            </form>

        )
    }
}