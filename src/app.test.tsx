import { describe, it, expect } from 'vitest';
import App from './App';
import { render, screen } from "@testing-library/react";

describe('App', () => {
  it('header', () => {
    render(<App/>)
    const header = screen.getByText('drink list', { exact:false })
    expect(header).toBeInTheDocument
  });
});