import handelAddComponent from "./utils/handelAddComponent.js";
let breadArray = [];
let cheeseArray = [];
let dataJson = {};
let isElementCreated = false;
let ischeesCreated = false;

fetch("./pizzaBread.json")
  .then((response) => response.json())
  .then((data) => {
    breadArray = data.bread.data;
    cheeseArray = data.cheese;
    dataJson = data;
    console.log(data);
  })
  .catch((error) => console.error(error));
// --------------------------------------declar global vars------------------------------------------//
const handelClickBtn = document.getElementById("handel_click_element");
const inputUserName = document.getElementById("input_user_name");
const userName = document.getElementById("user_name");
const userDataInfoContainer = document.getElementById(
  "user_data_info_container"
);
const breadContainer = document.getElementById("bread_container");

const pizzaContainer = (document.getElementById(
  "pizza_container"
).style.display = "hidden");
let mainUserName = "";

// --------------------------------------adding funcs to the elements------------------------------------------//
inputUserName.oninput = (e) => {
  mainUserName = "Hello " + e.target.value;
};

handelClickBtn.onclick = () => {
  userName.innerText = mainUserName + " let's make your Pizza";
};

//--------------------------------------create bread element -------------------------------------------------//

const handelCreateBread = () => {
  for (const key in dataJson) {
    const bigElemment = document.createElement("div");
    bigElemment.className = "big_elemment";
    const componentDataElemment = document.createElement("div");
    componentDataElemment.className = "component_data_elemment";
    const componentDataElemmentName = document.createElement("p");
    componentDataElemmentName.textContent = dataJson[key].objeData.name;
    componentDataElemmentName.className = "p_text";
    componentDataElemment.appendChild(componentDataElemmentName);
    bigElemment.appendChild(componentDataElemment);
    const mainObjectKey = key;
    dataJson[key].data.map((ojeData, index) => {
      const mainElemment = document.createElement("div");
      mainElemment.onclick = () => handelAddComponent(ojeData, mainObjectKey);
      mainElemment.className = "container_bread_card";
      const breadName = document.createElement("p");
      breadName.textContent = ojeData.name;
      breadName.className = "p_text";
      mainElemment.appendChild(breadName);
      bigElemment.appendChild(mainElemment);
      if (breadArray.length > 0) {
        isElementCreated = true;
      }
    });

    breadContainer.appendChild(bigElemment);
  }
};

let intervalId = setInterval(() => {
  if (!isElementCreated) {
    handelCreateBread();
  } else {
    clearInterval(intervalId);
    console.log("remove here");
  }
}, 2000);
