import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { describe, it, expect,  beforeAll, afterAll, vi  } from 'vitest';
import SearchDrinks from "./SearchDrinks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "../../App";

// du kan göra en json fil för att gör en mall för propsen
//whitin (a component)

// test av action i github
const server = setupServer(
    rest.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic', (_req, res, ctx)=>{
      return res(
        ctx.json({
          drinks: [{ idDrink:"12560", strDrink:"Afterglow", strDrinkThumb : "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg"}]
        }
        )
      )
    })
  )
  beforeAll(() => server.listen());
  
  afterAll(() => server.close());

describe('SearchDrink component', () => {
    it('should display input', () => {
      render(<App/>)
      //render(<SearchDrinks  AddToDos={AddToDos}/>)
      const input = screen.getByRole('textbox')
      expect(input).toBeInTheDocument()
    });
    it('should display drinkname efter search', async() => {
        render(<SearchDrinks AddToDos={vi.fn()}/>)
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()
        const user = userEvent.setup()
        await user.type(input, 'Afterglow')
        const buttonSearch = screen.getByRole('button', {name: /Search/i})
        expect(buttonSearch).toBeInTheDocument()
        await user.click(buttonSearch)
        expect( await screen.findByText('Afterglow', { exact:false})).toBeInTheDocument()
      });

    it('should contain button lägg till ToDo lista after search', async ()=>{
        render(<SearchDrinks AddToDos={vi.fn()} />)
        const input = screen.getByRole('textbox')
        const user = userEvent.setup()
        await user.type(input, 'Afterglow')
        const buttonSearch = screen.getByRole('button', {name: /Search/i})
        await user.click(buttonSearch)
        expect( screen.getByRole('button',{name: /lägg till Todo lista/i})).toBeInTheDocument()
    })
    it('should show error message if drink dosent exist in Fetch', async () => {
        render(<SearchDrinks AddToDos={vi.fn()}/>);
        const user = userEvent.setup();
        await user.click(screen.getByRole('button', {name: /Search/i}));
        expect( await screen.findByText('Kunde inte hitta drink', { exact: false}))
      })
  });