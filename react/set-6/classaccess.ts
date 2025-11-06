// classes-access-specifiers.ts

class Person {
  // Access specifiers
  public name: string;            // accessible everywhere
  protected id: string;           // accessible in this class + subclasses
  private _age: number;           // accessible only inside this class
  readonly createdAt: Date = new Date(); // can be read, not reassigned

  // static member (class-level)
  static species = "Homo sapiens";

  constructor(name: string, id: string, age: number) {
    this.name = name;
    this.id = id;
    this._age = age;
  }

  // public method
  public greet(): void {
    console.log(`Hi, I'm ${this.name}.`);
  }

  // getter/setter for the private field
  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0 || value > 150) {
      throw new Error("Age must be between 0 and 150.");
    }
    this._age = value;
  }

  // private method (only this class can use it)
  private formatId(): string {
    return `ID:${this.id}`;
  }

  // public method using a private helper
  public label(): string {
    return `${this.name} (${this.formatId()})`;
  }
}

class Student extends Person {
  public rollNo: number;

  constructor(name: string, id: string, age: number, rollNo: number) {
    super(name, id, age);
    this.rollNo = rollNo;
  }

  // Can access: public name, protected id, public getter age
  // Cannot access: private _age
  public profile(): string {
    // this._age;      // ❌ Error: private
    // this.id is protected → allowed here
    return `Student: ${this.name}, Roll: ${this.rollNo}, ` +
           `InternalId: ${this.id}, Age: ${this.age}`;
  }
}

// ---------- Usage ----------
const s = new Student("Murali", "STU-2025-001", 21, 17);

s.greet();                         // "Hi, I'm Murali."
console.log(s.profile());          // shows name, roll, protected id (from subclass), age
console.log(s.label());            // uses private helper internally
console.log(Person.species);       // "Homo sapiens"

s.age = 22;                        // ✅ via setter
console.log(s.age);                // 22
console.log(s.createdAt);          // readable
// s.createdAt = new Date();       // ❌ Error: readonly

// console.log(s.id);              // ❌ Error: protected (not accessible from outside)
// console.log(s._age);            // ❌ Error: private
