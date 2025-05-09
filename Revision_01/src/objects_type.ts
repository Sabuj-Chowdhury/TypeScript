{
  // type
  type Student = {
    name: string;
    age: number;
    course: string;
    cgpa: number;
    readonly university: "Burdwan";
  };

  // objects

  const student1: Student = {
    name: "xyz",
    age: 22,
    course: "python",
    cgpa: 7.8,
    university: "Burdwan",
  };
  const student2: Student = {
    name: "xyz",
    age: 22,
    course: "python",
    cgpa: 7.8,
    university: "Burdwan",
  };
  console.log(student2);
}
