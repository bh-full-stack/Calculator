window.onload = function() {
    var subtotal, editable, operator, lastOperator, lastOperand;
    var display = displayFactory();

    display.numberReset();
    resetCalculator();

    document.onkeydown = function(event) {
        eventHandler(event.key);
        console.log(event.key);
    };

    document.querySelectorAll("input[type='button']").forEach(function(element) {
        element.onclick = function (event) {
            eventHandler(event.target.value);
            console.log(event.target.value);
        };
    });

    function resetCalculator() {
        subtotal = 0;
        operator = "+";
        editable = false;
    }

    function eventHandler(key) {
        switch (key) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                if (editable && display.numberValue() !== 0) {
                    display.numberAddDigit(key);
                } else {
                    display.numberReset();
                    display.numberAddDigit(key);
                    editable = true;
                }
                break;
            case ".":
            case ",":
                if (editable) {
                    if (!display.numberHasDot()) {
                        display.numberAddDigit(".");
                    }
                } else {
                    display.numberReset();
                    display.numberAddDigit(".");
                    editable = true;
                }
                break;
            case "Backspace":
                if (editable && display.numberLengthWithDot() > 1) {
                    display.numberBackspace();
                    break;
                }
                // Falls through
            case "Delete":
            case "C":
            case "c":
                display.numberReset();
                resetCalculator();
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                if (editable) {
                    subtotal = operation(subtotal, display.numberValue(), operator);
                    display.numberReset();
                    if (display.numberShow(subtotal)) {
                        resetCalculator();
                        break;
                    }
                    editable = false;
                } else if (isNaN(display.numberValue())) {
                    resetCalculator();
                    break;
                } else {
                    subtotal = display.numberValue();
                }
                operator = key;
                break;
            case "=":
            case "Enter":
                if (editable) {
                    lastOperator = operator;
                    lastOperand = display.numberValue();
                    var temp = operation(subtotal, display.numberValue(), operator);
                    display.numberReset();
                    display.numberShow(temp);
                    resetCalculator();
                } else if (!isNaN(display.numberValue())) {
                    display.numberShow(operation(display.numberValue(), lastOperand, lastOperator));
                }
                break;
        }
    }
};