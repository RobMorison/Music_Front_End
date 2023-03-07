import React, { useState } from 'react';
import axios from 'axios';

const Modal = (props) =>{


    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        if(modal ==='true'){
            setModal(false);
        }
        else{
            setModal(true);
        }
    }

    

    return(
        <>
        <button onClick={toggleModal} className='btn-modal'>
            Open
        </button>
     
    
        <div className = 'modal'>
            <div onClick={toggleModal} className = 'true'></div>
            <div className = 'modal-content'>
                <h2>Hello Modal</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ab voluptatem sit consectetur commodi, aut ullam repudiandae ratione totam excepturi id autem, quasi quis labore. Consectetur dolorem dolorum cupiditate animi veniam labore numquam reprehenderit, repellat facere magni rem nihil asperiores, totam cum soluta ipsam pariatur autem. Quaerat accusamus harum fugit!</p>
                <button className = {'false'} onClick = {toggleModal}>Close</button>
            </div>
        </div>
        
        </>
    )
}
export default Modal;


