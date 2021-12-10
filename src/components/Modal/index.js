import React from 'react';
import ReactDOM from 'react-dom';
import { FaRegWindowClose } from 'react-icons/fa';
import { AppContext } from '../../App/context';
import './Modal.scss';

function Modal({ children }) {
  const { setOpenModal } = React.useContext(AppContext);

  return ReactDOM.createPortal(
    <div className="ModalBackground">
      <div className="container-modal-header">
        <span onClick={() => setOpenModal(false)}>
          <FaRegWindowClose style={{ fontSize: '30px' }} />
        </span>
      </div>
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
