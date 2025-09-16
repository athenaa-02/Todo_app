import React from 'react'
import {useSelector} from 'react-redux' 

function TodoItem() {
  const todo = useSelector((state) => state.todos)
  return (
    <div>TodoItem</div>
  )
}

export default TodoItem 