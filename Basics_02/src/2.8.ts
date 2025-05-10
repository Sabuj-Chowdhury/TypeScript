{
  // async promise

  const promiseCreate = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  const loadData = async () => {
    const getData = await promiseCreate();
    console.log(getData);
  };
  loadData();
}
