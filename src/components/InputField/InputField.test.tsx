import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputField from "./InputField";

const { type } = userEvent

test("it renders", () => {
  const handler = jest.fn()
  render(<InputField id="some-id" value="Hello, world!" label="Label Text" onUpdate={handler} />);
  const inputField = screen.getByLabelText("Label Text");
  expect(inputField).toHaveValue("Hello, world!")
});

test("it accepts typing", () => {
  const handler = jest.fn()
  render(<InputField id="some-id" value="" label="Label Text" onUpdate={handler} />);
  const inputField = screen.getByLabelText("Label Text");
  type(inputField, "Hi!")

  expect(handler).toHaveBeenCalledWith("H")
  expect(handler).toHaveBeenCalledWith("i")
  expect(handler).toHaveBeenCalledWith("!")
});
