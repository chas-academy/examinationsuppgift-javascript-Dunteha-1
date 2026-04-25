
const desc = document.getElementById("desc");
const amount = document.getElementById("amount");

const inBtn = document.getElementById("incomeBtn");
const exBtn = document.getElementById("expenseBtn");

const balance = document.getElementById("balance");

let total = 0;

inBtn.addEventListener("click", function () {
    let object = desc.value;
    let price = Number(amount.value);
    
    if (!isNaN(price) && amount.value !== "" && object !== "") {
        const li = document.createElement("li");
        li.textContent = `${object} - ${price} kr (Inkomst)`;
        document.getElementById("incomeList").appendChild(li);
        total += price;
        balance.textContent = total;
        desc.value = "";
        amount.value = "";
    }
});
exBtn.addEventListener("click", function () {
    let object = desc.value;
    let price = Number(amount.value);
    
    if (!isNaN(price) && amount.value !== "" && object !== "") {
        const li = document.createElement("li");
        li.textContent = `${object} - ${price} kr (Utgift)`;
        document.getElementById("expenseList").appendChild(li);
        total -= price;
        balance.textContent = total;
        desc.value = "";
        amount.value = "";
    }
});
