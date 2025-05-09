{
  // generic with interface

  interface Student<T, Y = null> {
    name: string;
    skills: {
      mains: string[];
    };
    bike: T;
    car?: Y;
  }

  interface RX100 {
    name: string;
    capcity: string;
  }

  const poorStudent: Student<RX100> = {
    name: "sabuj",
    skills: {
      mains: ["javascript", "python"],
    },
    bike: {
      name: "rx-100",
      capcity: "100cc",
    },
  };

  interface R15 {
    name: string;
    capcity: string;
    abs: boolean;
  }
  interface Benly {
    brand: string;
  }

  const richStudent: Student<R15, Benly> = {
    name: "sabuj",
    skills: {
      mains: ["javascript", "python"],
    },
    bike: {
      name: "R15",
      capcity: "160cc",
      abs: true,
    },
    car: {
      brand: "benly",
    },
  };
}
