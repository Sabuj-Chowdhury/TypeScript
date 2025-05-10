{
  // generics with functions
  function makeArray(value: string): string[] {
    return [value];
  }

  function makeArray2<T>(value: T): T[] {
    return [value];
  }

  const response = makeArray2<boolean>(true);
  type Student = {
    name: string;
    gpa: number;
  };
  const response2 = makeArray2<Student>({ name: "kuddus", gpa: 9 });
}
