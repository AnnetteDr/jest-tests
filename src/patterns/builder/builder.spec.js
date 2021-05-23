import { TaskBuilder, TaskWithoutBuilder } from "./builder";

const task = new TaskBuilder()
    .setName("Task 1")
    .setDescription("Description to task 1")
    .setDeadline(new Date(2021, 4, 17))
    .getTask();

const taskWithoutBuilder = new TaskWithoutBuilder("Task 1", "Description to task 1", "", new Date(2021, 4, 17));

test("tasks created by builder and simple constructor function with parameters have same properties", () => {
    expect(task).toMatchObject(taskWithoutBuilder);
});