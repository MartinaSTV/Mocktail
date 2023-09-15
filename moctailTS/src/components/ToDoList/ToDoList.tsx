import { PropsSaveToDo } from "../../interface"
import {useState} from 'react'
import './ToDoList.css'

const ToDoList = ({SaveToDo, setSaveToDo }:PropsSaveToDo) => {
    console.log(SaveToDo, 'inne i ToDoList componens')

    const [done , setDone] = useState<boolean>(true)
    const [removed , setremoved] = useState<string>('')
    const [strikedDrink , setStrikeDrink] = useState<string>('Drink')

    const removeToDo = ()=>{
    
        const removedDrink = SaveToDo.findIndex((todo)=> todo.idDrink ===  removed )
        const newarray = [...SaveToDo]
        newarray.splice(removedDrink, 1)
        setSaveToDo(newarray)
  
    }

    const todosElem = SaveToDo.map((todo, index)=> <article key={index}>
        {done ? <p>{todo.strDrink }</p>: <p className="strike">{ strikedDrink }</p> }
        <img src={ todo.strDrinkThumb } alt="" />
        <button onClick={ ()=>{  setremoved(todo.idDrink); removeToDo(); } }>x</button>
        <p onClick={ ()=>{ setDone(false); setStrikeDrink( todo.strDrink) }}>Stryk</p>
        </article> )
 
    return(
        <section>
            <h1>TodoList</h1>
            <button onClick={ ()=>{ setSaveToDo([])  } }>Ta bort alla drinkar från lista</button>
           { SaveToDo.length > 0 ? todosElem : null} 
        </section>
    )
}
export default ToDoList