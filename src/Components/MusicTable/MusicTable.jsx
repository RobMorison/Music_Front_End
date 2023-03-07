import axios from "axios";
import Modal from "../PutSong/PutSong";

const MusicTable = (props) => {


    const deleteSong = async (id) =>{
        await axios.delete(`http://127.0.0.1:8000/api/songs/${id}/`)
        console.log('delete song')
        await props.getAllSongs()
    }

    return ( 
        <table className='table table-striped table-dark'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {props.songs.map((song, index) => {
            return (
              <tr key={index}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
                <td><button onClick={() =>Modal}>Edit</button></td>
                <td><button onClick={() => deleteSong(song.id)}>Delete</button></td>
              </tr>
              
            )
          })}
        </tbody>
      </table>
     );
}
 
export default MusicTable;