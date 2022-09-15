import { useState } from 'react';
const AddEditToDoForm: React.FC = () => {
  const [toDo, setToDo] = useState({
    name: '',
    category: 'task',
    content: '',
    isArchived: 'false',
  });
  return <></>;
};

export default AddEditToDoForm;
