// tripple-slash directive to reference external Typescript file 'Teacher.ts'

/// <reference path="Teacher.ts" />

// Define a namespace called subjects to encapsulate related interfaces and classes
namespace Subjects {
  export class Subject{
    teacher: Teacher; // Declare a property 'teacher' of type 'Teacher'
    setTeacher = (teacher: Teacher) => {
      this.teacher = teacher; // Assign the provided teacher object to the teacher property
    }
  }
}
