import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tic tac toe header', () => {
  render(<App/>);
  const header = screen.getByText('Tic Tac Toe'); 
});