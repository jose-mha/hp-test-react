import React from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from '../../App/context';
import { FaRegWindowClose } from 'react-icons/fa';
import './Dialog.scss';

function Dialog({ children }) {
  const { setOpenDialog } = React.useContext(AppContext);

  return ReactDOM.createPortal(
    <div className="DialogBackground">
      <div className="container-dialog-header">
        <span onClick={() => setOpenDialog(false)}>
          <FaRegWindowClose style={{ fontSize: '30px' }} />
        </span>
      </div>
      <div className="container-dialog-body">
        <h3>{children}</h3>
      </div>
    </div>,

    document.getElementById('dialog')
  );
}

export default Dialog;
