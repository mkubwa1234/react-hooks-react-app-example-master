import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { format } from "date-fns";
import App from "../components/App";

test('should include "Now" in the header instead of a time', () => {
  render(<App />);
  expect(
    screen.queryByText(format(new Date(), "MMMM do yyyy, h:mm:ss a"))
  ).not.toBeInTheDocument();
  expect(screen.getByText(/Now/g)).toBeInTheDocument();
});

test("should include the <ExampleComponent />", () => {
  render(<App />);
  expect(screen.getByText("Whoa!")).toBeInTheDocument();
});

test("should include the <TestComponent />", () => {
  render(<App />);
  expect(screen.getByTitle("time video")).toBeInTheDocument();
});
