import handelAddComponent from "./handelAddComponent.js";

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

export default handelCreateCard;
