import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const MockedApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

test(`Check if both headers are rendered`, () => {
  render(MockedApp());
  const tasksElement = screen.getByText("Your Tasks");
  const finishedTaslsElement = screen.getByText("Finished Tasks");

  expect(tasksElement).toBeInTheDocument();
  expect(finishedTaslsElement).toBeTruthy();
});

test("Check if headers can be toggle", () => {
  render(MockedApp());
  const tasksElement = screen.getByText("Your Tasks");
  const finishedTasksElement = screen.getByText("Finished Tasks");
  fireEvent.click(tasksElement);
  expect(tasksElement).toHaveClass("border-b-2 border-black font-bold");
  expect(finishedTasksElement).not.toHaveClass(
    "border-b-2 border-black font-bold"
  );
});

test("Check if new tasks can be added", () => {
  render(MockedApp());
  const addToDoElement = screen.getByText("Add New Task");
  fireEvent.click(addToDoElement);
  const addInputElement = screen.getByTestId("add-task-input");
  fireEvent.change(addInputElement, { target: { value: "New Task Value" } });
  const addTaskElement = screen.getByText("Add");
  fireEvent.click(addTaskElement);
  const addedTaskElement = screen.getByText("New Task Value");
});
