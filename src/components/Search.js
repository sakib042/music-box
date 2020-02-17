import React, { Component } from 'react';

class Search extends Component {

    state = { artistQuery: '' };

    updateArtistQuery = (event) => {
        this.setState({ artistQuery: event.target.value });
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }
    }

    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery);
    }

    render() {
        return (
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Here (e.g: artist name)"
                    onKeyPress={this.handleKeyPress}
                    onChange={this.updateArtistQuery}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary rounded-0 pr-5 pl-5" onClick={this.searchArtist}>Search</button>
                </div>
            </div>
        )
    }
}

export default Search;