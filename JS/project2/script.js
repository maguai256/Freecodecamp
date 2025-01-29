const convert_btn = document.getElementById("convert-btn");
const output = document.getElementById("output");
convert_btn.onclick = main_convert;
function main_convert() {
    let input_number = document.getElementById("number").value;
    output.style.display = "block";
    if (input_number === ""){
        output.textContent = "Please enter a valid number.";
        alert_mode();
    }else if (+(input_number) < 1){
        output.textContent = "Please enter a number greater than or equal to 1.";
        alert_mode();
    }else if (input_number > 3999){
        output.textContent = "Please enter a number less than or equal to 3999.";
        alert_mode(); 
    }else if (+(input_number) % 1 != 0){
        output.textContent = "Please enter a valid number.";
        alert_mode(); 
    }else{
        output.textContent = number_transform(input_number);
        nomal_mode();
    }
};
function number_transform(number) {
    let return_str = "";
    let transform_r = ["M" ,"CM" ,"D" ,"CD ","C" ,"XC" ,"L" ,"XL" ,"X" ,"IX" ,"V" ,"IV" ,"I"];
    let transform_n = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    while(number != 0 ){
        for(let i=0; i<transform_n.length;i++){
            if (number >= transform_n[i]){
                return_str = return_str + transform_r[i];
                number -= transform_n[i];
                break;
            }
        }
    }
    return return_str;
}
function alert_mode() {
    output.style.backgroundColor = "pink";
    output.style.border = "1px solid red";
};
function nomal_mode() {
    output.style.backgroundColor = "white";
    output.style.border = "0px";
};