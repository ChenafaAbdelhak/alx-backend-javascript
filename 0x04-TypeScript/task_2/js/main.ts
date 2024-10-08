export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

export function createEmployee(salary: string | number): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

export function isDirector(emloyee: Teacher | Director) {
  return employee instanceof Director;
}

export function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  } else {
      return (employee as Teacher).workTeacheTasks();
  }
}

export type Subjects = ('Math' | 'History');

export function teachClass(todayClass: subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
}

