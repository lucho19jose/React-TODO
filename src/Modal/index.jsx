import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TodoContext } from '../TodoContext'
//import Button from '@mui/material/Button';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ModalUI({ children }) {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  const [ open, setOpen ] = React.useState(false);
  const handleClose = () => setOpenModal(false);

  return ReactDOM.createPortal(
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          { children }
        </Box>
      </Modal>
    </div>,
    document.getElementById('modal')
  );
}

export { ModalUI };