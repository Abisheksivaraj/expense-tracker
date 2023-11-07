"use script";

// Elements

const amountEl = document.querySelector(".amount");

const incomeEl = document.querySelector(".inc-amt");

const expenseEl = document.querySelector(".amt");

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
  if (transactionData.length > 0) {
    transactionData.forEach((ele) => {
      listDataToDom(ele);
    });
    calcBalance();
  }
}

// deleting data
function deleteList(id) {
  transactionData = transactionData.filter((ele) => {
    return ele.id != id;
  });
  calcBalance();
  addingDataToDom();
}

// calculates total, income, expense
const calcBalance = () => {
  let income = transactionData
    .filter((ele) => ele.amount > 0)
    .reduce((prev, ele) => (prev += Number(ele.amount)), 0);
  let expense = transactionData
    .filter((ele) => ele.amount < 0)
    .reduce((prev, ele) => (prev += Number(ele.amount)), 0);
  let balance = income + expense;
  incomeEl.innerText = `₹ ${income.toFixed(2)}`;
  expenseEl.innerText = `₹ ${expense .toFixed(2)*-1}`;
  amountEl.innerText = `₹ ${balance.toFixed(2)}`;
};

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
