import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Log in/Sign up link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Log in sign up/i);
  expect(linkElement).toBeInTheDocument();
});
