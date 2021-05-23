export class Task {
    constructor(builder) {
        this.name = builder.name || '';
        this.description = builder.description || '';
        this.acceptanceCriteria = builder.acceptanceCriteria || '';
        this.deadline = builder.deadline || null;
    }
}

export class TaskBuilder {    
    setName(name) {
        this.name = name;
        return this;
    }

    setDescription(description) {
        this.description = description;
        return this;
    }

    setAcceptanceCriteria(acceptanceCriteria) {
        this.acceptanceCriteria = acceptanceCriteria;
        return this;
    }

    setDeadline(deadline) {
        this.deadline = deadline;
        return this;
    }

    getTask() {
        return new Task(this);
    }
};

export class TaskWithoutBuilder {
    constructor(name, description, acceptanceCriteria, deadline) {
        this.name = name;
        this.description = description;
        this.acceptanceCriteria = acceptanceCriteria;
        this.deadline = deadline;
    }
}