import axios from "axios";

const DeleteSong = (props) => {


  function handleSubmit(event){
    event.preventDefault();
    axios.delete('http://127.0.0.1:8000/api/songs/');

  }    
  
  
  return ( 
      handleSubmit
   );
}
 
export default DeleteSong;