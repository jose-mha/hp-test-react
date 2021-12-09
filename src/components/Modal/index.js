import ReactDOM from 'react-dom';
import { FaRegWindowClose } from 'react-icons/fa';
import './Modal.scss';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      <div className="container-modal-header">
        <FaRegWindowClose style={{ fontSize: '30px' }} />
      </div>
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };
