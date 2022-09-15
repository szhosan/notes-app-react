import React from 'react'
import Container from './components/Container/Container'
import ToDoTable from './components/ToDoTable/ToDoTable'
import ToDoListHeader from './components/ToDoListHeader/ToDoListHeader'

const App: React.FC = () => {
  return (
    <>
      <Container>
        <ToDoTable header={<ToDoListHeader />} />
      </Container>
    </>
  )
}

export default App
