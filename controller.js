window.onload = function() {
    // Default state
    var subtotal = 0;
    var editable = false;
    var operator =  "+";
    var display = displayFactory();
    display.numberReset();

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
                if (!(editable && display.numberLength() >= 8)) {
                    if (editable && display.numberValue() != "0") {
                        display.setNumber(event.key);
                    } else {
                        display.numberReset();
                        display.setNumber(event.key);
                        editable = true;
                    }
                }
                break;
            case "Delete":
            case "Backspace":
                display.numberReset();
                subtotal = 0;
                operator = "+";
                editable = false;
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                if (editable) {
                    subtotal = operation(subtotal, parseInt(display.numberValue()), operator);
                    display.numberReset();
                    if (display.setNumber(subtotal)) {
                        subtotal = 0;
                        operator = "+";
                        editable = false;
                        break;
                    }
                    editable = false;
                }
                operator = event.key;
                break;
            case "=":
            case "Enter":
                if (editable) {
                    var temp = operation(subtotal, parseInt(display.numberValue()), operator);
                    display.numberReset();
                    display.setNumber(temp);
                    subtotal = 0;
                    operator = "+";
                    editable = false;
                }
                break;
        }

        console.log(event.key);

    };
};