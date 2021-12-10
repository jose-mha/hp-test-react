import React from 'react';
import ReactDOM from 'react-dom';
import { FaRegWindowClose } from 'react-icons/fa';
import { AppContext } from '../../App/context';
import './Modal.scss';

function Modal({ children }) {
  const { setOpenModal } = React.useContext(AppContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  return ReactDOM.createPortal(
    <div className="ModalBackground">
      <div className="container-modal-header">
        <span onClick={onCancel}>
          <FaRegWindowClose style={{ fontSize: '30px' }} />
        </span>
      </div>
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
