import { render, screen, fireEvent } from "@testing-library/react";

import Tasks from "../Tasks";

test("Make sure a task can be deleted", () => {
  render(
    <Tasks
      setTasks={() => {}}
      tasks={[{ task: "do something", finished: false, id: 1 }]}
    />
  );
  const deleteBtnElement = screen.getByRole("button", { name: "Delete" });
  const deletedTaskElement = screen.getByText("do something");
  fireEvent.click(deleteBtnElement);
  expect(deletedTaskElement).not.toBeInTheDocument();
});
