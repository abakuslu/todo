import React from 'react'
import TodoItem from '../TodoItem/TodoItem';
import {MdDelete} from 'react-icons/md';

const TodoList = ({todos, handleDelete, clearItems, handleEdit}) => {
  return (
    <div>
      <ul>
        {todos &&
          todos.map((todo) => {
            return (
              <TodoItem
                todo={todo}
                key={todo.id}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            );
          })}
      </ul>
      {todos.length > 0 && (
        <button className='btn' onClick={clearItems}>
          clear Todos <MdDelete className='btn-icon' />
        </button>
      )}
    </div>
  );
};

export default TodoList