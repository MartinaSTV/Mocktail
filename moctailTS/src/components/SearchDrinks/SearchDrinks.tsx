import { useEffect, useState }from 'react'
import AddToDo from '../AddToDo/AddToDo'
import { DrinkResultFetch } from '../../interface'
import { PropsAddTodosSearch } from '../../interface'
import './SearchDrink.scss'

const SearchDrinks = ({AddToDos}: PropsAddTodosSearch)=>{

    const [searchDrinkResult, setSearchDrinkResult ] = useState<DrinkResultFetch[] | []>([])
    const [searchedDrink, setSearchedDrink] = useState<string>('')
    const [DrinkFavorite, setSaveDrinkFavorite] = useState<DrinkResultFetch[] | []>([])
    const [ErrorMessage, setErrorMessage] = useState<string>('')
    console.log(DrinkFavorite)

    useEffect(()=>{

        const fetchData = async()=>{
            try{    
                const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
                const response = await fetch(url)
                const data = await response.json()
                console.log(data.drinks)
                setSearchDrinkResult(data.drinks)
            }
            catch(errro){
                setErrorMessage('Fann ingen drinklista')
            }
        }
        fetchData()

    },[])

    const fetchDrink = async () => {
          
        const drink = searchDrinkResult.filter((drink) => drink.strDrink === searchedDrink)
        if (drink.length > 0){
        setSaveDrinkFavorite(drink)}else { setErrorMessage('Kunde inte hitta drink')}
    
    }
    
        const foundDrinkElem  = DrinkFavorite.map((drink)=> <AddToDo  drink={ drink } key={drink.idDrink} AddToDos={AddToDos}/>)
    
    return(
        <section className='SearchDrink'>
            <label htmlFor="inputDrink">Search Drink</label>
            <input type="text" placeholder="Search Drinks" id='inputDrink' onChange={  (e)=>{ setSearchedDrink( e.target.value) }} />
            <button onClick={ fetchDrink }>Search</button>
            <article>{ DrinkFavorite.length > 0 ? foundDrinkElem : null}</article>
             
             {searchedDrink? null: ErrorMessage }
        </section>
    )
}
export default SearchDrinks