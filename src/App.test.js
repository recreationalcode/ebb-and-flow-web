import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders schedule button', () => {
  render(<App />);
  const buttons = screen.getAllByText(/schedule/i);
  expect(buttons.length).toBeGreaterThan(0);
});
