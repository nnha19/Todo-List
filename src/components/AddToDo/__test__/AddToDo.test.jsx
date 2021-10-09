import { render, screen, fireEvent } from "@testing-library/react";
import AddToDo from "../AddToDo";

function addTaskModalShows() {
  const addTaskElement = screen.getByText("Add New Task");
  fireEvent.click(addTaskElement);
}

test("Check if the button gets rendered", () => {
  render(<AddToDo />);
  const addTaskElement = screen.getByText("Add New Task");
  expect(addTaskElement).toBeInTheDocument;
});

test("Check if the form gets rendered if add new task btn is clicked", () => {
  render(<AddToDo />);
  addTaskModalShows();
  const addTaskForm = screen.getByTestId("add-task-form");
  expect(addTaskForm).toBeInTheDocument;
});

test("Test if add task modal disspears when backdrop is clicked", () => {
  render(<AddToDo />);
  addTaskModalShows();
  const backdropElement = screen.getByTestId("backdrop");
  fireEvent.click(backdropElement);
  const addTaskModalElement = screen.queryByTestId("form");
  expect(addTaskModalElement).not.toBeInTheDocument();
});

test("Test if users can type into add task input", () => {
  render(<AddToDo />);
  addTaskModalShows();
  const addTaskInputElement = screen.getByPlaceholderText("Add Your Task");
  fireEvent.change(addTaskInputElement, {
    target: { value: "New task value" },
  });
});
