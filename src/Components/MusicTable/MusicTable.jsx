const MusicTable = (props) => {
    return ( 
        <table>
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
          {props.parentSongs.map((songs, index) => {
            return (
              <tr key={index}>
                <td>{songs.title}</td>
                <td>{songs.artist}</td>
                <td>{songs.album}</td>
                <td>{songs.release_date}</td>
                <td>{songs.genre}</td>
                <td><button type='submit'>Delete</button></td>
              </tr>
              
            )
          })}
        </tbody>
      </table>
     );
}
 
export default MusicTable;