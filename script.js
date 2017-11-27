window.onload = function() {
    // Default state
    var subtotal = 0;
    var display = document.querySelector("#display");
    var editable = false;
    var operator =  "+";
    display.value = "0";



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
            case "Delete":
            case "Backspace":
                display.value = "0";
                break;
            case "+":
                if (editable) {
                    subtotal = subtotal + parseInt(display.value);
                    display.value = subtotal.toString();
                    editable = false;
                }
                operator = "+";
                break;
            case "=":
            case "Enter":
                if (editable) {
                    display.value = (subtotal + parseInt(display.value)).toString();
                    subtotal = 0;
                    operator = "+";
                    editable = false;
                }
                break;
        }

        console.log(event.key);

    };
};