import {useState} from 'react';
const App = () => {
 
  const [todos, setTodos] = useState(["First todo", "Second todo"]);
  const [input, setInput] = useState('');

  return (
    <>
    <div>
      <h1>Todo App</h1>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button>Add Todo</button> 
      <ul>
        {todos.map( (todo,index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
    </>  
  );
}

export default App;
