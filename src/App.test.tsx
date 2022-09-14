import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";

const { click } = userEvent

test("renders title", () => {
  render(<Router><App /></Router>);
  const title = screen.getByText(/react ui library/i);
  expect(title).toBeInTheDocument();
});

test("links to components", async () => {
  render(<Router><App /></Router>);
  const toggleLink = screen.getByRole("link", {
    name: "Toggle",
  });
  click(toggleLink)

  const toggle = screen.getByRole("heading", {
    name: "Toggle",
  });

  expect(toggle).toBeInTheDocument();
});
