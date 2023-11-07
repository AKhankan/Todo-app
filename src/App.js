import { useState } from 'react';
import './App.css';
import Card from './components/card';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [updated, setUpdated] = useState(null)


  return (
    <>
    <Card input ={input} setInput={setInput} todos={todos} setTodos={setTodos} updated={updated} setUpdated={setUpdated} />
    </>
  );
}

export default App;
