import React from 'react'
import { CompletedIcon, DeleteButton, EditButton, Input, ListWrapper } from './style';
import { AiOutlineCheck } from "react-icons/ai";

const Todolist = ({ todos, setTodos, updated, setUpdated}) => {


  const handleDelete = id => {
    setTodos(todos.filter(item => item.id !== id))
    setUpdated(null)
  }

  const handleCompleted = id => {
    setTodos(todos.map(item => item.id === id ? { ...item, completed: !item.completed } : item))
  }
   
  const handleEdit = item => {

    setUpdated(item)
}


  return (
    <div>

      {todos.map((todo) => (
        <ListWrapper key={todo.id}>
          <li className="todo-list">
            <Input
              type="text"
              value={todo.title}
              disabled
              isCompleted={todo.completed}
            />
            <CompletedIcon onClick={() => handleCompleted(todo.id)}/>
            <DeleteButton onClick={() => handleDelete(todo.id)}>Delete</DeleteButton>
            <EditButton onClick={() => handleEdit(todo)}>Edit</EditButton>
          </li>
        </ListWrapper>

      ))}
    </div>
  )
};

export default Todolist