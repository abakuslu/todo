import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md';
import './todoItem.css'


const TodoItem = ({todo, handleDelete, handleEdit}) => {
  return (
    <li className='item'>
      <div className='info'>
        <span className='todo'> {todo.todo}</span>
      </div>
      <div>
        <button
          className='edit-btn'
          aria-label='edit button'
          onClick={()=>handleEdit(todo.id)}
        >
          <MdEdit />
        </button>
        <button
          className='clear-btn'
          aria-label='delete button'
          onClick={() => handleDelete(todo.id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default TodoItem