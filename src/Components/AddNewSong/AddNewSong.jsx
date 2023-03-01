// sfc shortcut
// imrs shortcut

import React, { useState } from 'react';


const AddNewSong = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    return ( 
        <form>
            <label>Title: </label>
            <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>
            <label>Artist: </label>
            <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <label>Album: </label>
            <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <label>Release Date: </label>
            <input type='date' value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
            <label>Genre: </label>
            <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>
        </form>
     );
}
 
export default AddNewSong;