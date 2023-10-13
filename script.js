"use script";

// Elements

const amountEl = document.querySelector(".amount");

const incomeEl = document.querySelector(".inc-amt");

const spentEl = document.querySelector(".salary");

const descriptionEl = document.querySelector(".type");
console.log(spentEl);
console.log(descriptionEl);

const transEl = document.querySelector(".trans");

const addEl = document.querySelector(".add");
console.log(addEl);

const deleteEl = document.querySelector(".btn");

// Global variable
let transactionData = [];
// function

function config() {
  transEl.innerHTML = "";
}

// adding data
function addingDataToDom() {
  transEl.innerHTML = "";
  transactionData.forEach((ele) => {
    listDataToDom(ele);
  });
}

// deleting data
function deleteList(id) {
  transactionData = transactionData.filter((ele) => {
    return ele.id != id;
  });
  addingDataToDom();
}

// adding data to dom
function listDataToDom(obj) {
  let listEle = document.createElement("li");
  if (obj.amount >= 0) {
    listEle.setAttribute("class", "inc");
  } else {
    listEle.setAttribute("class", "exp");
  }
  listEle.innerHTML = `
      ${obj.description}
      <span>${obj.amount}</span>
      <button class="btn" onclick="deleteList(${obj.id})">x</button>
  `;
  transEl.appendChild(listEle);
}

addEl.addEventListener("click", () => {
  console.log(transactionData, "starting");
  if (descriptionEl.value.trim() == "" || spentEl.value.trim() == "") {
    console.log("empty");
    alert("please enter the values");
  } else {
    let obj = {
      id: Date.now(),
      description: descriptionEl.value.trim(),
      amount: spentEl.value,
    };
    transactionData.push(obj);
    console.log(transactionData);
    descriptionEl.value = "";
    spentEl.value = "";
  }
  addingDataToDom();
});
