import { useState } from 'react'
import './App.css'
import List from './list'
import TodoApp from './TodoApp.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
  
    <>
      <TodoApp></TodoApp>
    </>
 
  )
}

export default App
