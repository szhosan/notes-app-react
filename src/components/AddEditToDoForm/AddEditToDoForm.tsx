import { useEffect, useState, ChangeEvent } from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState, IToDo } from '../../interfaces/interfaces';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { grey } from '@mui/material/colors';
import { addItem, editItem, setShowModal, setToDoIdToEdit } from '../../redux/todosReducer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const initialToDo = { id: 'temp', name: '', category: 'task', content: '', isArchived: false };

const AddEditToDoForm: React.FC = () => {
  const toDoIdToEdit = useSelector((state: IRootState) => state.settings.toDoIdToEdit);
  const currentToDoList = useSelector((state: IRootState) => state.toDoList);
  const [toDo, setToDo] = useState<IToDo>(initialToDo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toDoIdToEdit) {
      setToDo(currentToDoList.find(({ id }) => id === toDoIdToEdit) ?? initialToDo);
    }
  }, [toDoIdToEdit, currentToDoList]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setToDo((prevState: IToDo) => {
      return { ...prevState, [name]: value };
    });
  };

  const closeModal = () => {
    dispatch(setShowModal(false));
    dispatch(setToDoIdToEdit(null));
  };

  const formSubmit = () => {
    closeModal();
    if (toDoIdToEdit) {
      dispatch(editItem(toDo));
      return;
    }
    dispatch(addItem(toDo));
  };

  const theme = createTheme({ palette: { primary: grey } });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <IconButton onClick={closeModal} sx={{ position: 'absolute', top: 5, right: 5 }}>
            <CloseIcon />
          </IconButton>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component='h1' variant='h5'>
              {toDoIdToEdit ? `Edit contact created ${toDo?.created}` : 'Add new to do item'}
            </Typography>
            <Box component='form' onSubmit={formSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='name'
                label='Name'
                name='name'
                autoComplete='Name'
                autoFocus
                value={toDo?.name}
                multiline={true}
                minRows={2}
                onChange={handleChange}
              />
              <FormLabel id='radio-buttons-group'>Switch category</FormLabel>
              <RadioGroup
                aria-labelledby='buttons'
                name='category'
                value={toDo?.category}
                onChange={handleChange}
              >
                <FormControlLabel value='task' control={<Radio />} label='Task' />
                <FormControlLabel value='thought' control={<Radio />} label='Random thought' />
                <FormControlLabel value='idea' control={<Radio />} label='Idea' />
              </RadioGroup>
              <TextField
                margin='normal'
                required
                fullWidth
                id='content'
                label='Content'
                name='content'
                autoComplete='Content'
                autoFocus
                value={toDo?.content}
                onChange={handleChange}
                multiline={true}
                minRows={4}
              />
              <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                {toDoIdToEdit ? 'Save changes' : 'Add'}
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default AddEditToDoForm;
