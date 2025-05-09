{
  // spared and rest operators

  const basket1: string[] = ["ata", "moida", "suji"];
  const basket2: string[] = ["mach", "magso", "sobji"];

  basket1.push(...basket2);

  const list1 = {
    name: "xyz",
    occupasion: "teacher",
  };
  const list2 = {
    skill: "typscript",
    experience: 3,
  };
  const totalList = {
    ...list1,
    ...list2,
  };

  //   rest

  function shoppingList(...items: string[]) {
    items.forEach((item) => {
      console.log(`I have bought ${item}`);
    });
  }
  shoppingList("apple", "banana", "drugs");
}
