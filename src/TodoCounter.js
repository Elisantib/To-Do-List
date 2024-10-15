import './styles/TodoCounter.css'

function TodoCounter({ total, completed }) {

  return (
    <div className='container-todo'>
      <h1 className='title'>To Do List</h1>
      <h3 className='sub-title'>Has completado {completed} de {total} ToDo</h3>
    </div>
  );
}

export { TodoCounter };
