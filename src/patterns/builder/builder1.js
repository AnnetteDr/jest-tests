class Task {
    name = '';
    description = '';
    acceptanceCriteria = '';
    deadline = null;
}

export class TaskBuilder {   
    #task;

    constructor() {
        this.reset();
    }

    reset() {
        this.#task = new Task();
    } 

    setName(name) {
        this.#task.name = name;
        return this;
    }

    setDescription(description) {
        this.#task.description = description;
        return this;
    }

    setAcceptanceCriteria(acceptanceCriteria) {
        this.task.acceptanceCriteria = acceptanceCriteria;
        return this;
    }

    setDeadline(deadline) {
        this.task.deadline = deadline;
        return this;
    }

    getTask() {
        return this.task;
    }
};

const task = new TaskBuilder()
    .setName("Task 1")
    .setDescription("Description for task 1")
    .getTask();
