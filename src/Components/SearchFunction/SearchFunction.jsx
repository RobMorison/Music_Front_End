import React, { useState } from 'react';


const SearchFunction = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    
    function handleSubmit(event){
        event.preventDefault();
        searchSong()
    }

    async function searchSong(){
        const results = props.songs.filter((song) =>{
            if (song.title === searchTerm || song.artist === searchTerm || song.album === searchTerm || song.release_date === searchTerm || song.genre === searchTerm){
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