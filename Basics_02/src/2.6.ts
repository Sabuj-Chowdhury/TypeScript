{
  // constrains
  function addToBasket<T extends { id: number; price: number }>(value: T) {
    const tax = "10 %";
    return {
      tax,
      ...value,
    };
  }

  const basket1 = {
    id: 1,
    price: 70,
    name: "kola",
  };

  type Basket1 = {
    id: number;
    price: number;
    name: string;
  };

  const response = addToBasket<Basket1>(basket1);
  const response2 = addToBasket({
    id: 2,
    price: 80,
  });
}
