import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import AddNewSong from './Components/AddNewSong/AddNewSong';
import SearchFunction from './Components/SearchFunction/SearchFunction';

function App() {

  const[songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

async function addNewSong(song){
  let tempSong= [...songs, song]
  setSongs(tempSong);

  const response = await axios.post ('http://127.0.0.1:8000/api/songs/', song);

  if(response.status === 204){
    console.log('Successfully created a new song!');
  }
}

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/songs/');
    setSongs(response.data);
  }

  return (
    <><div>
      <AddNewSong addNewSong={addNewSong}/>
    </div>
    <div>
      <SearchFunction songs={songs} setSongs={setSongs}/>
    </div>
    <div>
      <MusicTable parentSongs={songs}/>
    </div>
</>    
  );
}

export default App;
