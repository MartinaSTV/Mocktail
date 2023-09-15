
export interface DrinkResultFetch { 
    idDrink: string
    strDrink: string
    strDrinkThumb: string
}
interface PropsDrink{
    drink: DrinkResultFetch
    AddToDos: (drink:DrinkResultFetch )=> void
}
export interface PropsAddTodosSearch{
    AddToDos: (drink:DrinkResultFetch )=> void
   }

   interface PropsSaveToDo{
    SaveToDo:DrinkResultFetch[]
    setSaveToDo: React.Dispatch<React.SetStateAction<DrinkResultFetch[]>>
}


