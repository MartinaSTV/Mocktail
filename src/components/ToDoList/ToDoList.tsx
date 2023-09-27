import { PropsSaveToDo } from "../../interface"
import {useState} from 'react'
import './ToDoList.scss'

// fixa så att stryka fungerar bättre
// Css 
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

    const todosElem = SaveToDo.map((todo, index)=> <article className="todo-list" key={index}>
        {done ? <p>{todo.strDrink }</p>: <p className="strike">{ strikedDrink }</p> }
        <img className="todo-list__img" src={ todo.strDrinkThumb } alt="" />
        <button onClick={ ()=>{  setremoved(todo.idDrink); removeToDo(); } }>x</button>
        <p onClick={ ()=>{ setDone(false); setStrikeDrink( todo.strDrink) }}>Stryk</p>
        </article> )
 
    return(
        <section className="todo-article">
            <h1>TodoList</h1>
            <button onClick={ ()=>{ setSaveToDo([])  } }>Ta bort alla drinkar från lista</button>
            <article className="todo-article__todo-items">{ SaveToDo.length > 0 ? todosElem : null} </article>
           
        </section>
    )
}
export default ToDoList