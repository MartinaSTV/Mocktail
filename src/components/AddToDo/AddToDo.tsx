import { PropsDrink } from "../../interface"


const AddToDo = ({ drink, AddToDos }:PropsDrink)=>{

    

    return(
        <section>
            <p>{drink.strDrink}</p>
            <button onClick={ ()=>{ AddToDos(drink) } }>Lägg till Todo lista</button>
        </section>
    )
}
export default AddToDo