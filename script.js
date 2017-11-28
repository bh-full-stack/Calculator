window.onload = function() {
    // Default state
    var subtotal = 0;
    var display = document.querySelector("#display");
    var editable = false;
    var operator =  "+";
    display.value = "0";

    function operation(operand1, operand2, operator) {
        switch (operator) {
            case "+":
                return operand1 + operand2;
            case "-":
                return operand1 - operand2;
        }
    }

    document.onkeydown = function(event) {
        // Input type handling
        switch (event.key) {
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
                if (!(editable && display.value.length >= 8)) {
                    if (editable && display.value != "0") {
                        display.value += event.key;
                    } else {
                        display.value = event.key;
                        editable = true;
                    }
                }
                break;
            case "Backspace":
                if (display.value.length > 1) {
                    display.value = display.value.slice(0, length - 1);
                    break;
                }
            case "Delete":
                display.value = "0";
                subtotal = 0;
                operator = "+";
                editable = false;
                break;
            case "+":
            case "-":
                if (editable) {
                    subtotal = operation(subtotal, parseInt(display.value), operator);
                    display.value = subtotal.toString();
                    editable = false;
                }
                operator = event.key;
                break;
            case "=":
            case "Enter":
                if (editable) {
                    var temp = operation(subtotal, parseInt(display.value), operator);
                    display.value = temp.toString();
                    subtotal = 0;
                    operator = "+";
                    editable = false;
                }
                break;
        }
        
        console.log(event.key);
    };
};