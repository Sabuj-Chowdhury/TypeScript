{
  // function
  function showName1(name: string): string {
    return `Your name is ${name}`;
  }

  const showName2 = (name: string): string => `Your name is ${name}`;

  interface BankAccount {
    acName: string;
    bankName: string;
    balance: number;
    addbalance(balance: number): number;
  }

  //   error ache
  const bankAccount: BankAccount = {
    acName: "xyz",
    bankName: "sbi",
    balance: 20,
    addbalance(balance: number): string {
      return `Balance = ${balance + balance}`;
    },
  };

  console.log(bankAccount.balance);

  bankAccount.addbalance(30);
  console.log(bankAccount);
}
