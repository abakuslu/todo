import './todoForm.css'

const TodoForm = ({handleTodo, input, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-center'>
        <div className='form-group'>
         
          <input
            type='text'
            className='form-control'
            id='todo'
            name='todo'
            placeholder='Todo'
            value={input}
            onChange={handleTodo}
          />
        </div>
        <button type='submit' className='btn'> submit</button>
      </div>
    </form>
  );
};
1
export default TodoForm;
