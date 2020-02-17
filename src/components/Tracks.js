import React, { Component } from 'react';

class Tracks extends Component {

    state = { playing: false, audio: null, playingPreviewUrl: null, icon: '' };

    playAudio = previewUrl => () => {
        if (previewUrl) {
            const audio = new Audio(previewUrl);
            if (!this.state.playing) {
                audio.play();
                this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
            } else {
                this.state.audio.pause();
                if (this.state.playingPreviewUrl === previewUrl) {
                    this.setState({ playing: false });
                } else {
                    audio.play();
                    this.setState({ audio, playingPreviewUrl: previewUrl });
                }
            }
        }
    }

    trackIcon = track => {
        if (!track.preview_url) {
            return <i className="icon fa fa-ban fa-lg text-danger"></i>
        }
        else if (this.state.playing && this.state.playingPreviewUrl === track.preview_url) {
            return <i className="icon fa fa-pause fa-lg hand"></i>
        }
        else {
            return <i className="icon fa fa-play fa-lg hand"></i>
        }
    }

    render() {
        const { tracks } = this.props;

        return (
            <div className="row mt-3">
                {
                    tracks.map(track => {
                        const { id, name, album, preview_url } = track;
                        return (
                            <div
                                key={id}
                                className="col-12 col-sm-6 col-md-4 col-lg-3"
                                onClick={this.playAudio(preview_url)} >
                                <div className="card mb-2">
                                    <img
                                        src={album.images[0] && album.images[0].url}
                                        alt="track-image"
                                        className="card-img-top" />
                                    <div className="card-body">
                                        <p className="card-text">{name}</p>
                                    </div>
                                    <span className="icons">
                                        {this.trackIcon(track)}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tracks;