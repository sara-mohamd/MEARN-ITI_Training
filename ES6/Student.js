class Student {
  constructor(name, university, faculty, finalGrade) {
    this.name = name;
    this.university = university;
    this.faculty = faculty;
    this.finalGrade = finalGrade;
  }

  // Method to display student details
  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`University: ${this.university}`);
    console.log(`Faculty: ${this.faculty}`);
    console.log(`Final Grade: ${this.finalGrade}`);
  }
}

const student1 = new Student('Sara', 'Beni-Suef University', 'Computer Science', 'A');
student1.displayDetails();
