{
  // constrains with keyof operator

  function habijabi<T, X extends keyof T>(obj: T, key: X) {
    return obj[key];
  }
  const habijabiObject = {
    id: 2,
    name: "XYZ",
  };

  //   another example

  const khujeDawValeKeyDiye = <T, X extends keyof T>(obj: T, key: X) => {
    return obj[key];
  };
  const user = {
    passion: "khawa",
    speciality: "kichu na kora",
    goodAt: "nothing",
  };
  console.log(khujeDawValeKeyDiye(user, "speciality"));
  //   console.log(habijabi(habijabiObject, "name"));
}
