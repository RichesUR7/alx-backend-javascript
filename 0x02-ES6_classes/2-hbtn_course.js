/**
 *
 * @class
 * @classdesc HolbertonCourse holds basic operations for students
 */

function checkType(value, expectedType, errorMessage) {
  const typeChecks = {
    string: typeof value === 'string',
    number: typeof value === 'number',
  };

  if (!typeChecks[expectedType]) {
    throw new TypeError(errorMessage);
  }
}

function checkArrayType(value, errorMessage) {
  if (!Array.isArray(value) || value.some((item) => typeof item !== 'string')) {
    throw new TypeError(errorMessage);
  }
}

export default class HolbertonCourse {
  constructor(name, length, students) {
    checkType(name, 'string', 'Name must be a string');
    checkType(length, 'number', 'Length must be a number');
    checkArrayType(students, 'Students must be an array of strings');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    checkType(newName, 'string', 'Name must be a string');
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    checkType(newLength, 'number', 'Length must be a number');
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    checkArrayType(newStudents, 'Students must be an array of strings');
    this._students = newStudents;
  }
}
