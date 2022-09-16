import React from 'react';
import Container from './components/Container/Container';
import ToDoTable from './components/ToDoTable/ToDoTable';
import AddEditToDoForm from './components/AddEditToDoForm/AddEditToDoForm';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderType, IRootState } from './interfaces/interfaces';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { setShowModal, setToDoIdToEdit } from './redux/todosReducer';

const modalStyle = {
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

const App: React.FC = () => {
  const isModalOpen = useSelector((state: IRootState) => state.settings.showModal);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setShowModal(false));
    dispatch(setToDoIdToEdit(null));
  };
  return (
    <>
      <Container>
        <ToDoTable headerType={HeaderType.list} />
      </Container>
      <Container>
        <ToDoTable headerType={HeaderType.stats} />
      </Container>
      {isModalOpen && (
        <>
          <Modal open={isModalOpen} onClose={handleCloseModal}>
            <Box sx={modalStyle}>
              <AddEditToDoForm />
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};

export default App;
