// Define Teacher @interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Create a Teacher
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Extend the teacher interface to create a director interface
interface Director extends Teacher {
  numberOfReports: number;
}

// Create a Director
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// printTeacherFunction @interface
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Test
console.log(printTeacher('John', 'Doe'));

// Define StudentClassConstructor interface
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Define StudentClassInterface interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Define StudentClass
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
