import React from 'react';

const Artist = ({ artist }) => {
    if (!artist) return null;
    const { images, name, followers, genres } = artist;

    return (
        <div>
            <img src={images[0] && images[0].url} alt="artist-profile" height="100px" />
            <h3>{name}</h3>
            <p>{followers.total} - Followers</p>
            <p>{genres.join(', ')}</p>
        </div>
    )
}

export default Artist;