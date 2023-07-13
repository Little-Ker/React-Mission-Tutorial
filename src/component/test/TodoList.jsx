import React from 'react'
import {
  useSelector 
} from 'react-redux'
const TodoList = () => {
  const states = useSelector(state => state.todos) // <-- 拿取資料
  return (
    <ul>
      {states.todoList.map(i => (
        <li key={i.id}>{i.name}</li>
      ))}
    </ul>
  )
}
 
export default TodoList