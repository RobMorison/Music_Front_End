import React, { useState } from 'react';


const SearchFunction = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    
    function handleSubmit(event){
        event.preventDefault();
        searchSong()
    }

    async function searchSong(){
        const results = props.songs.filter((song) =>{
            if (
                song.title.includes(searchTerm) || 
                song.artist.includes(searchTerm) ||
                song.album.includes(searchTerm) ||
                song.release_date.includes(searchTerm) ||
                song.genre.includes(searchTerm)){
                return true
            }

            
        })
        // State of Songs Changed to results
        props.setSongs(results)
        console.log("Result from search", results)
       }

    return ( 
        <form onSubmit={handleSubmit}>
            <label></label>
            <input type='text' value={searchTerm} placeholder= 'Search' onChange={(event) => setSearchTerm(event.target.value)}/>
            <button onClick={handleSubmit} >Search</button>
        </form>
     );
}
 
export default SearchFunction;