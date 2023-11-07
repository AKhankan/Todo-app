import React, { useEffect, useState } from 'react'
import { EditWrapper, EditInput as Input } from './style'
import { EditButton, } from '../todo-list/style'

const EditInput = ({ updated, setUpdated, todos, setTodos }) => {

  const [newTitle, setNewTitle] = useState("")

  useEffect(() => {
    setNewTitle(updated?.title)
  }, [updated?.title]);

  const handleEdit = () => {
    let newTodos = (todos.map(item => item.id === updated?.id ?  { ...item, title: newTitle} : item))
    setTodos(newTodos);
    setUpdated(null)
  }

  console.log('first', updated)
  return (
    <>
      <EditWrapper>
        <Input value={newTitle} onChange={event => setNewTitle(event.target.value)}/>
        <EditButton onClick={handleEdit}>Update</EditButton>
      </EditWrapper>
    </>
  )
}

export default EditInput