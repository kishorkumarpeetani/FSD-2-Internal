class Student {
  // Properties
  name: string;
  rollNo: number;
  course: string;

  // Constructor
  constructor(name: string, rollNo: number, course: string) {
    this.name = name;
    this.rollNo = rollNo;
    this.course = course;
  }

  // Method to display student details
  displayDetails(): void {
    console.log("Student Name:", this.name);
    console.log("Roll Number:", this.rollNo);
    console.log("Course:", this.course);
  }
}

// Creating objects of Student class
const s1 = new Student("Murali", 17, "CSE");
const s2 = new Student("Asha", 21, "IT");

// Calling method
s1.displayDetails();
console.log("-----------------");
s2.displayDetails();
