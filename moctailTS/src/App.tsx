import { useState } from 'react'
import './App.css'
import SearchDrinks from './components/SearchDrinks/SearchDrinks'
import ToDoList from './components/ToDoList/ToDoList'
import { DrinkResultFetch } from './interface'

function App() {
  

  const [SaveToDo, setSaveToDo] = useState<DrinkResultFetch[] | []>([])

  const AddToDos = (drink: DrinkResultFetch)=>{
    setSaveToDo([...SaveToDo, drink])
  }

  console.log(SaveToDo)
  return (

   <main>
    <h1>Mark&apos;s To-drink list</h1>
    <section><SearchDrinks  AddToDos={AddToDos}/></section>
    <section><ToDoList SaveToDo={SaveToDo} setSaveToDo= {setSaveToDo} /></section>
   </main>
  )
  }

export default App
