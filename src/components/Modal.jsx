import { useState } from "react"
import closeBtn from '../img/cerrar.svg';

const Modal = ({setModal}) => {
  
  const hideModal = ()=> {
      setModal(false);
  }
  return (
    <div className="modal">
       <div className="cerrar-modal">
           <img src={closeBtn} alt="Cerrar Modal" onClick={hideModal} />
       </div>
    </div>
  )
}

export default Modal