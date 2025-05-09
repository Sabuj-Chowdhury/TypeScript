{
  // generics
  const villages: Array<string> = ["mankar", "raozan", "bandhorbon"];
  const age: Array<number> = [20, 18, 37, 89];
  const conditions: Array<boolean> = [true, false];

  // better way to declare generic type
  type GenericArray<T> = Array<T>;
  const villages1: GenericArray<string> = ["mankar", "raozan", "bandhorbon"];
  const age1: GenericArray<number> = [20, 18, 37, 89];
  const conditions1: GenericArray<boolean> = [true, false];

  const tree: GenericArray<{ name: string; fruit: boolean }> = [
    {
      name: "xyz",
      fruit: true,
    },
    {
      name: "xyz",
      fruit: false,
    },
  ];
}
