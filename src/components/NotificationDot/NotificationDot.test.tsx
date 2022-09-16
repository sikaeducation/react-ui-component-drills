import { render, screen } from "@testing-library/react"
import NotificationDot from "./NotificationDot"

test("renders a notification dot", () => {
  render(<NotificationDot />)
  const dot = screen.getByRole("img")
  expect(dot).toHaveClass("NotificationDot")
});
