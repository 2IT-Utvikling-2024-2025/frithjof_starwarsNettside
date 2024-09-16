import { useState } from 'react'
import './App.css'
import MyHoppies from './MyHobbies.jsx'
import Mylist from './Mylist.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    
     <>
     {/*<Profile></Profile>*/}
     <Mylist></Mylist>
     </>
     

   
  )
}

export default App
