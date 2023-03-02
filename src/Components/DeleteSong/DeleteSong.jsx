import axios from "axios";

async function deleteSong(){
    const response = await axios.delete('http://127.0.0.1:8000/api/songs/');
    setSongs(response.data);
  }