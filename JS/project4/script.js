let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
const cash_nunmber = [1, 5, 10, 25, 100, 500, 1000, 2000 , 10000];
const drawer = document.getElementById("drawer");
const total = document.getElementById("total");
const purchase_btn = document.getElementById("purchase-btn");
const cash = document.getElementById("cash");
const change_due = document.getElementById("change-due");
let drawer_str = "Change in drawer:\n";
for(let i=0;i<cid.length;i++){
    drawer_str = drawer_str + cid[i][0] + ": $" +  cid[i][1] + "\n";
}
drawer.textContent = drawer_str;
total.textContent = "Total: $" + price;

purchase_btn.onclick = show;
function show() {
    let cash = document.getElementById("cash").value;
    if (cash === ""){
        ;
    }else{
        if (+cash < price){
            alert("Customer does not have enough money to purchase the item");
        }else if(+cash === price){
            change_due.textContent = "No change due - customer paid with exact cash";
            change_due.style.display = "block";
        }else{
            find_purchase(+cash);
        }
    }
}
function find_purchase(leftCash){
    leftCash *= 100;
    leftCash -= price*100;
    for (let i=0;i<cid.length;i++){
        cid[i][1] *= 100;
    }
    let used = [
        ['PENNY', 0],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0]
    ];
    for (let i=0;i<cid.length;i++){
        let cash_n = cash_nunmber[cid.length-1-i];
        while (leftCash >= cash_n && cid[cid.length-1-i][1] > 0){
            used[cid.length-1-i][1] += cash_n;
            cid[cid.length-1-i][1] -= cash_n;
            leftCash -= cash_n  
        }
        if (leftCash === 0) break;
    }

    let change_str = "Status: "
    if (leftCash != 0 ){
        change_str = change_str + "INSUFFICIENT_FUNDS" 
        change_due.style.display = "block";
        change_due.textContent = change_str;
    }else{
        if (open_close_judge(cid)) {
            change_str = change_str + "CLOSED "
        }else{
            change_str = change_str + "OPEN "
        }
        for (let i=used.length-1;i>=0;i--){
            if (used[i][1] != 0){
                change_str = change_str + used[i][0] + ": $" + used[i][1]/100 + " ";
            }
        }
        change_due.textContent = change_str;
        change_due.style.display = "block";
    }

}
function open_close_judge(cid) {
    for (let i=0;i<cid.length;i++){
        if (cid[i][1] != 0 ){
            return false;
        }
    }
    return true;
}