const check_btn = document.querySelector("#check-btn");

check_btn.onclick = getInput;

function getInput() {
    let input_str = document.getElementById("text-input").value ;
    judge_input(input_str);
};
function judge_input(istring){
    if (istring === ""){
        alert("Please input a value");
    }else{
        let dealed_string = deal_input_str(istring);
        if (palindrome_judge(dealed_string)){
            document.getElementById("result").textContent = istring + " is a palindrome";
        }else{
            document.getElementById("result").textContent = istring + " is not a palindrome";
        }
    }
};
function deal_input_str(istring) {
    let dealed_str = istring.replace(/[^a-zA-Z0-9]/g, '');
    dealed_str = dealed_str.toLowerCase();
    return dealed_str;
};
function palindrome_judge(istring) {
    for(let i = 0; i < istring.length; i++){
        if(istring[i] != istring[istring.length - 1 - i]){
            return false;
        }
    }
    return true;
};