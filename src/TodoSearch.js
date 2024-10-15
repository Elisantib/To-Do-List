import './styles/TodoSearch.css'

function TodoSearch() {
  return (
    <div className='search'>
      <h3 className='search-title'>Añadir tu próxima tarea :</h3>
      <input className='search-input' placeholder="Escribe tu próxima tarea" />
    </div>
  
  );
}

export { TodoSearch };
