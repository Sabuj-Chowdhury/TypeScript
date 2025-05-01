{
  type Student = {
    name: string;
    age: number;
    email?: string;
  };

  const sabuj: Student = {
    name: "sabuj",
    age: 67,
    email: "xyz@mail.com",
  };

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => {
    return num1 + num2;
  };
}
