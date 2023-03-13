// import mainJson from "../pizzaBread.json";
// console.log("mainJson", mainJson);
import { mainDataJson } from "./importJsonFiles.js";
(async () => {
  const data = await mainDataJson();
  console.log("mainDataJson", data);
})();
const cardContainer = document.getElementById("card_container");
const handelAddComponent = async (ojeData, mainObjectKey) => {
  const data = await mainDataJson();
  const myString = localStorage.getItem("card");
  const mainStorage = JSON.parse(myString);
  
  const handelPush = () => {
    mainStorage[mainObjectKey].data.push(ojeData);
    console.log("main storage", mainStorage);
    localStorage.setItem("card", JSON.stringify(mainStorage));
  };
  const functionAdd = () => {
    const mainData = mainStorage[mainObjectKey];
    if (typeof mainData === "undefined") {
      mainStorage[mainObjectKey] = {};
      mainStorage[mainObjectKey].objeData = data[mainObjectKey].objeData;
      mainStorage[mainObjectKey].data = [];
      handelPush();
    } else {
      handelPush();
    }
  };
  if (myString === null) {
    localStorage.setItem("card", JSON.stringify({}));
    functionAdd();
  } else {
    console.log("mainStorage", mainStorage);
    functionAdd();
  }

  //   console.log(ojeData, mainObjectKey);
};
export default handelAddComponent;
