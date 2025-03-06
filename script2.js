function clearScreen(){
    document.getElementById("result").value ="";
}

function setScreenValue(value){
    document.getElementById("result").value += value;

}

function calculateResult(){
    const elementresult = document.getElementById("result");
    const expression = resultElement.value.trim();
    



if (expression === ""){
    elementresult.value = "Enter an Expression";
    return;
}

try{
    resultElement.value = eval(expression);
} catch (e) {
    resultElement.value = "Invalid Expression"
}

}