import React from 'react';
import Container from './components/Container/Container';
import ToDoTable from './components/ToDoTable/ToDoTable';
import ToDoListHeader from './components/ToDoListHeader/ToDoListHeader';
import ToDoSummaryHeader from './components/ToDoSummaryHeader/ToDoSummaryHeader';

const App: React.FC = () => {
  return (
    <>
      <Container>
        <ToDoTable header={<ToDoListHeader />} />
      </Container>
      <Container>
        <ToDoTable header={<ToDoSummaryHeader />} />
      </Container>
    </>
  );
};

export default App;
