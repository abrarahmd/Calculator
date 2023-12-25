function calculate(input) {
    const operators = ["+", "%", "÷", "x", "-"];
    let foundOperator = false;
    let float = ".";
    let operand1 = "";
    let operand2 = "";
    let operator = null;
    let answer = null;

    for (let value of input) {
        if (operators.includes(value)) {
            console.log(value)
            operator = value;
            foundOperator = true;
        }
        if (!foundOperator && !operators.includes(value)) {
            operand1 += value;
        }
        if (foundOperator && !operators.includes(value)) {
            operand2 += value;
        }
    }
    // Use parseFloat for operands to handle decimal values
    if (operand1 == "π") {
        operand1 = 3.1416
    }
    if (operand2 == "π") {
        operand2 = 3.1416
    }
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);

    // Check if operand2 is zero before division or multiplication
    if (operator === "÷" && operand2 === 0) {
        console.log("☠️");
    } else if (operator === "x" && (isNaN(operand1) || isNaN(operand2))) {
        console.log("undefined");
    } else {
        switch (operator) {
            case "%":
                answer = operand1 % operand2;
                break;
            case "÷":
                answer = operand1 / operand2;
                break;
            case "x":
                answer = operand1 * operand2;
                break;
            case "-":
                answer = operand1 - operand2;
                break;
            case "+":
                answer = operand1 + operand2;
                break;
            default:
                console.log("undefined");
        }
        if (answer !== null && typeof operand1 === 'number' && typeof operand2 === 'number'){
            return answer
        }
        else {
            return "undefined"
        }
        
    }
}
function showResult() {
    let inputBox = document.getElementById("inputBox");
    let result = calculate(inputBox.value);
    inputBox.value = result;
}