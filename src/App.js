import React from "react";

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";


//import "./App.css";

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Hacer la masa de la pizza', completed: false },
  { text: 'Comprar ingredientes', completed: false },
  { text: 'Cortar champiñones', completed: false },
  { text: 'Cortar morron', completed: false },


]

function App() {
  return (
    <React.Fragment>

      <div className="container-ppal">
      
        <TodoCounter completed={16} total={25} />

        <div className="todo-header">
          <TodoSearch />
          <CreateTodoButton />
        </div>

        <TodoList>
          {/* recorremos el array  */}
          {defaultTodos.map(todo => (
              <TodoItem 
                key={todo.text} //Se usa el texto de la tarea como clave única
                text={todo.text} 
                completed={todo.completed}
              />
          ))}
        </TodoList>

        

      </div>

    </React.Fragment>
  );
}



export default App;
