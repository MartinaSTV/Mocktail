import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi  } from 'vitest';
import ToDoList from "./ToDoList";
import    SaveToDo from '../SearchDrinks/AddToDosEx.json'


describe('test ToDoList', ()=>{
    it('should have header ToDoList', ()=>{
        render(<ToDoList SaveToDo={SaveToDo} setSaveToDo={vi.fn()}/>)
        expect(screen.getByText('TodoList')).toBeInTheDocument()
    })
})