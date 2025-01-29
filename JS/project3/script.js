const check_btn =document.getElementById("check-btn");
const clear_btn =document.getElementById("clear-btn");
const results_div =document.getElementById("results-div");

const r1 = /^1 \d{3}-\d{3}-\d{4}$/;
const r2 = /^1 \(\d{3}\) \d{3}-\d{4}$/;
const r3 = /^1\(\d{3}\)\d{3}-\d{4}$/;
const r4 = /^1 \d{3} \d{3} \d{4}$/;
const r5 = /^\d{10}$/;
const r6 = /^\d{3}-\d{3}-\d{4}$/;
const r7 = /^\(\d{3}\)\d{3}-\d{4}$/;
const regex_list = [r1 ,r2 ,r3 ,r4 ,r5 ,r6 ,r7];


check_btn.onclick = check;
clear_btn.onclick = clear;
function check() {
    const inputNumber = document.getElementById("user-input").value;
    if (inputNumber === ""){
        alert("Please provide a phone number");
    }else if (regex_list.some(regex => regex.test(inputNumber))){
        results_div.textContent = "Valid US number: " + inputNumber;
    }else {
        results_div.textContent = "Invalid US number: " + inputNumber;
    }
}
function clear() {
    results_div.textContent = "";
}