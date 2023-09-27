import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi  } from 'vitest';
import ToDoList from "./ToDoList";
import    SaveToDo from '../SearchDrinks/AddToDosEx.json'


describe('test ToDoList', ()=>{
    it('should have header ToDoList', ()=>{
        render(<ToDoList SaveToDo={SaveToDo} setSaveToDo={vi.fn()}/>)
        expect(screen.getByText('TodoList')).toBeInTheDocument()
    })
  /*   it('should show drink in TodoList', async()=>{
        render(<ToDoList SaveToDo={SaveToDo} setSaveToDo={vi.fn()}/>)
        expect(screen.getByText('TodoList')).toBeInTheDocument()
        const user = userEvent.setup()
        const input = screen.getByRole('textbox')
        await user.type(input, 'Afterglow')
        const buttonSearch = screen.getByRole('button', {name: /Search/i})
        await user.click(buttonSearch)
        expect( screen.getByRole('button',{name: /lägg till Todo lista/i})).toBeInTheDocument() 
        const buttonAdd = screen.getByRole('button',{name: /lägg till Todo lista/i})
        await user.click( buttonAdd)
        expect( screen.getByText('Stryk')).toBeInTheDocument()
        expect(screen.getByRole('img') ).toBeInTheDocument()
        expect( await screen.findAllByText('Afterglow'))
    }) */

})