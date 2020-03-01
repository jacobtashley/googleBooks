import React, {Component} from 'react';

export default class Types extends Component {
    render() {
        return(
            <div className="types">
                Print Type: <select className="printType"></select>
                Book Type: <select className="bookType"></select>
            </div>
        )
    }
}