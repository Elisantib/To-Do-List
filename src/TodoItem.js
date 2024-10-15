function TodoItem(props) {
  return (
    <li className="list-todoitemd">
      <p>{ props.text }</p>
      <span>V</span>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
