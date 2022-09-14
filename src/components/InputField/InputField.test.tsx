import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputField from "./InputField";

const { click } = userEvent

test.skip("renders a checked state", () => {
  const handler = jest.fn()
  render(<InputField id="some-id" value="Hello, world!" label="Label Text" onUpdate={handler} />);
  const toggle = screen.getByLabelText(/label text/i);
  expect(toggle).toBeChecked()
});
