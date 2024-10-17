import './styles/TodoList.css'

function TodoItem(props) {
  return (
    <li className="list-todoitem">
      <span className='V'>V</span>
      <p>{ props.text }</p>
      <div className='V-X'>
        <span className='X'>X</span>
      </div>
    </li>
  );
}

export { TodoItem };
