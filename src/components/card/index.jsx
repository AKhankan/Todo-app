import React from 'react'
import { CardInput, CardTitle, CardWrapper, DeleteButton,  InputWrapper, ListContainer, SubmitButton } from './style'
import { v4 as uuidV4 } from "uuid"
import Todolist from './components/todo-list'
import EditInput from './components/edit-input'

const Card = ({ input, setInput, todos, setTodos, updated, setUpdated }) => {

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodos([...todos, { id: uuidV4(), title: input, completed: false }])
    setInput('');
  };

  return (
    <CardWrapper>
      <CardTitle>Todo-List</CardTitle>
      <div>
        <InputWrapper>
          <form>
            <CardInput placeholder='Enter a Todo...' value={input} onChange={handleInput}></CardInput>
            <SubmitButton onClick={handleSubmit}>Add</SubmitButton>
          </form>
        </InputWrapper>
        <ListContainer>
          <Todolist todos={todos} setTodos={setTodos} updated={updated} setUpdated={setUpdated} />
        </ListContainer>
      </div>
      {
        updated && <EditInput updated={updated} setUpdated={setUpdated} todos={todos} setTodos={setTodos} />
      }
      
    </CardWrapper>
  )
}

export default Card