import React from 'react';

const Artist = ({ artist }) => {
    if (!artist) return null;
    const { images, name, followers, genres } = artist;

    return (
        <div className="row mt-2">
            <div className="col-12 col-md-5 col-lg-4">
                <img src={images[0] && images[0].url} alt="artist-profile" className="img img-fluid img-thumbnail" />
            </div>
            <div className="col-12 col-md-7 col-lg-8">
                <h3 className="mt-4">{name}</h3>
                <p><kbd>Followers: <code>{followers.total}</code></kbd></p>
                <hr />
                {
                    genres.length > 0 ?
                        genres.map(gen => {
                            return (
                                <span key={gen} className="badge badge-secondary mr-1">{gen}</span>
                            )
                        }) : <span className="badge badge-secondary">{genres}</span>
                }
            </div>
        </div>
    )
}

export default Artist;