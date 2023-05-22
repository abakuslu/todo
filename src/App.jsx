import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import {v4 as uuidv4} from 'uuid';
import Alert from './components/Alert';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();
  const [alert, setAlert] = useState({show: false});

  // set todo
  const handleTodo = (e) => {
    setInput(e.target.value);
  };

  //handleAlert
  const handleAlert = ({type, text}) => {
    setAlert({show: true, type, text});
    setTimeout(() => {
      setAlert({show: false});
    }, 3000);
  };

  //submit todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== '') {
      if (edit) {
        let tempTodo = todos.map((todo) => {
          return todo.id === id ? {...todo, todo: input} : todo;
        });
        setTodos(tempTodo);
        setEdit(false);
       handleAlert({type: 'success', text: 'item edited'});
      } else {
        setTodos([...todos, {todo: input, id: uuidv4()}]);
        handleAlert({type: 'success', text: 'item added'});

      }

      setInput('');
    } else {
      //alert
      handleAlert({
        type: 'danger',
        text: 'charge cant be empty value and amount value has to be bigger than zero',
      });
    }
  };

  //handle delete item

  const handleDelete = (id) => {
    let tempTodo = todos.filter((todo) => todo.id !== id);
    setTodos(tempTodo);
     handleAlert({type: 'danger', text: 'item deleted'});
  };

  //clear all expenses
  const clearItems = () => {
    setTodos([]);
    handleAlert({type: 'danger', text: 'all item deleted'});
  };

  //handle edite
  const handleEdit = (id) => {
    let todo = todos.find((todo) => todo.id === id);
    setInput(todo.todo);
    setId(id);
    setEdit(true);

  };

  return (
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <main className='App'>
        <h1>Todo </h1>

        <TodoForm
          handleTodo={handleTodo}
          input={input}
          handleSubmit={handleSubmit}
        />
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          clearItems={clearItems}
          handleEdit={handleEdit}
        />
      </main>
    </div>
  );
}

export default App
