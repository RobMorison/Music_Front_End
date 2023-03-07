// sfc shortcut
// imrs shortcut

import React, { useState } from 'react';


const AddNewSong = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault(); //stops page from reloading when submit button is clicked
        // newSong variable holds onto new variable input by user with the usestate function have to set the variable key value pair to associate the new input with the value
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        };
        console.log(newSong) //used as a check/debugger to check if input is being captured
        props.addNewSong(newSong)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h5>Add New Song</h5>
            <ul>
            <label>Title: </label>
            <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>
            </ul>
            <ul>
            <label>Artist: </label>
            <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            </ul>
            <ul>
            <label>Album: </label>
            <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </ul>
            <ul>
            <label>Release Date: </label>
            <input type='date' value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
            </ul>
            <ul>
            <label>Genre: </label>
            <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </ul>
            <ul className= 'button'>
            <button type='submit'>Add Song</button>
            </ul>
        </form>
     );
}
 
export default AddNewSong;