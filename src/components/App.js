import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {

	state = { artistQuery: '', artist: null, tracks: [] }

	updateArtistQuery = (event) => {
		console.log(event.target.value);
		this.setState({ artistQuery: event.target.value });
	}

	handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			this.searchArtist();
		}
	}

	searchArtist = () => {
		console.log(this.state);

		fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
			.then(response => response.json())
			.then(json => {
				console.log(json);
				if (json.artists.total > 0) {
					const artist = json.artists.items[0];
					this.setState({ artist });
					console.log(artist);
					fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
						.then(response => response.json())
						.then(json => this.setState({ tracks: json.tracks }))
						.catch(error => alert(error.message));
				}
			}).catch(error => alert(error.message));
	}

	render() {
		return (
			<div>
				<h2>Music BOX</h2>
				<input
					type="text"
					placeholder="Search Here"
					onKeyPress={this.handleKeyPress}
					onChange={this.updateArtistQuery}
				/>
				<button onClick={this.searchArtist}>Search</button>

				<Artist artist={this.state.artist}></Artist>
				<hr />
				<Tracks tracks={this.state.tracks}></Tracks>
			</div>
		);
	}
}

export default App;