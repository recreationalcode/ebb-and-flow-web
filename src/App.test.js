import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders schedule button', () => {
  render(<App />);
  const button = screen.getByText(/schedule/i);
  expect(button).toBeInTheDocument();
});
