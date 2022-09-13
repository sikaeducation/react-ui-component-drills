import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toggle from './Toggle';

const { click } = userEvent

test('renders a checked state', () => {
  const handler = jest.fn()
  render(<Toggle id="some-id" on={true} label="Label Text" onToggle={handler} />);
  const toggle = screen.getByLabelText(/label text/i);
  expect(toggle).toBeChecked()
});

test('renders an unchecked state', () => {
  const handler = jest.fn()
  render(<Toggle id="some-id" on={false} label="Label Text" onToggle={handler} />);
  const toggle = screen.getByLabelText(/label text/i);
  expect(toggle).not.toBeChecked()
});

test('it checks', () => {
  const handler = jest.fn()
  render(<Toggle id="some-id" on={false} label="Label Text" onToggle={handler} />);
  const toggle = screen.getByLabelText(/label text/i);
  click(toggle)
  expect(handler).toHaveBeenCalledTimes(1)
});
