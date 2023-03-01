import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import AddNewSong from './Components/AddNewSong/AddNewSong';

function App() {

  const[songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);


  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/songs/');
    setSongs(response.data);
  }

  return (
    <><div>
      <AddNewSong />
    </div>
    <div>
      <MusicTable parentSongs={songs}/>
    </div>
    <div>
      <button onClick={() => getAllSongs()}>Search</button>
      {console.log(songs)}
    </div></>    
  );
}

export default App;
