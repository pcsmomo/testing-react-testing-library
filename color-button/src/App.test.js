import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /learn react/i });
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react button', () => {
  render(<App />);

  const buttonElement = screen.getByRole('button', { name: /Button Role/i });
  expect(buttonElement).toBeInTheDocument();
});
