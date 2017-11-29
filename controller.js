window.onload = function() {
    // Default state
    var subtotal = 0;
    var editable = false;
    var operator =  "+";
    var display = displayFactory();
    display.numberReset();

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
                if (!(editable && display.numberLength() >= 8)) {
                    if (editable && display.numberValue() != "0") {
                        display.appendValue(key);
                    } else {
                        display.numberReset();
                        display.appendValue(key);
                        editable = true;
                    }
                }
                break;
            case ".":
            case ",":
                if (editable) {
                    if (!display.numberHasDot()) {
                        display.appendValue(".");
                    }
                } else {
                    display.numberReset();
                    display.appendValue(".");
                    editable = true;
                }
                break;
            case "Delete":
            case "Backspace":
            case "C":
            case "c":
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
                    subtotal = operation(subtotal, parseFloat(display.numberValue()), operator);
                    display.numberReset();
                    if (display.appendValue(subtotal)) {
                        subtotal = 0;
                        operator = "+";
                        editable = false;
                        break;
                    }
                    editable = false;
                }
                operator = key;
                break;
            case "=":
            case "Enter":
                if (editable) {
                    var temp = operation(subtotal, parseFloat(display.numberValue()), operator);
                    display.numberReset();
                    display.appendValue(temp);
                    subtotal = 0;
                    operator = "+";
                    editable = false;
                }
                break;
        }
    }

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
};