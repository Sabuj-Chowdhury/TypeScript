{
  // object destructuring
  const objectVar = {
    name: "xyz",
    age: 89,
    uni: {
      name: "burdwan",
      course: "Bsc",
    },
    address: "yex",
    email: "xyz@mail.com",
  };

  const {
    name: nam,
    uni: { course: myCourse },
  } = objectVar;

  // array destructuring
  const num = [1, 3, 4, 5, 6];
  const [, , third, , ...rest] = num;
}
