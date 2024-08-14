export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName}. ${lastName}`;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export interface StudentConstructor {
  firstName: string;
  lastName: string;
}

export interface StudentInterface {
  workOnHomework() : string;
  displayName(): string;
}

export class StudentClass implements StudentInterface{
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
    }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return `${this.firstName}`;
  }

}
