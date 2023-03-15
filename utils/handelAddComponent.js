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
  const objeDataFindData = data[mainObjectKey].objeData;
  console.log(mainStorage);
  const handelPush = () => {
    const secondValue = document.createElement("p");
    secondValue.textContent = ojeData.name;
    secondValue.id = ojeData.name + "_salt_second";
    const mainIdIsAvailable = document.getElementById(mainObjectKey + "_salt");
    const isSameChildAval = document.getElementById(
      ojeData.name + "_salt_second"
    );
    if (!isSameChildAval) {
      if (mainIdIsAvailable) {
        alert("is there");
        mainIdIsAvailable.appendChild(secondValue);
      } else {
        alert("not there");
        const mainDiv = document.createElement("div");
        mainDiv.id = mainObjectKey + "_salt";
        mainDiv.className = "main_container_salt";
        const mainText = document.createElement("p");
        mainText.textContent = objeDataFindData.name;
        mainText.className = "p_bolder";
        mainDiv.appendChild(mainText);
        mainDiv.appendChild(secondValue);
        cardContainer.appendChild(mainDiv);
      }
      mainStorage[mainObjectKey].data.push(ojeData);
      localStorage.setItem("card", JSON.stringify(mainStorage));
    } else {
      alert("your pizza has the component you clicked");
    }

    //----------------------------------------------
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
