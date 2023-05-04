const addPriceFunction = () => {
  let totalPrice = 0;
  const thePriceNumber = document.getElementById("the_price_number");
  const myString = localStorage.getItem("card");
  const mainStorage = JSON.parse(myString);
  for (const key in mainStorage) {
    const mainObjectKey = key;
    mainStorage[key].data.map(({ price, name }, index) => {
      totalPrice += parseInt(price);
    });
  }
  thePriceNumber.innerHTML = totalPrice;
};

export default addPriceFunction;

const handelCreateCard = () => {
  const myString = localStorage.getItem("card");
  const mainStorage = JSON.parse(myString);
  for (const key in mainStorage) {
    const mainObjectKey = key;
    mainStorage[key].data.map((ojeData, index) => {
      handelAddComponent(mainStorage, ojeData, mainObjectKey);
    });
  }
};

//   export default handelCreateCard;
