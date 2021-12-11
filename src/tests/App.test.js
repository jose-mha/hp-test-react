import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Selecciona tu filtro', () => {
  render(<App />);
  const linkElement = screen.getByText(/Selecciona tu filtro/i);
  expect(linkElement).toBeInTheDocument();
});
