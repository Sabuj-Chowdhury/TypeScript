function myFunOne(num1: number, num2: number): number {
  return num1 + num2;
}

const myFunTwo = (num1: number, num2: number): string => {
  return `Result = ${num1 + num2}`;
};

const anotherObj = {
  name: "sabuj",
  balance: 0,
  myBalance(balance: number): number {
    return this.balance + balance;
  },
};
