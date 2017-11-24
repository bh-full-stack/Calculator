window.onload = function() {
    var subtotal = 0;
    var display = document.querySelector("#display");
    var editable = false;
    display.value = "0";

    document.onkeydown = function(event) {
        // Handle numbers
        /*var allowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(event.key) > -1;
        if (allowed && (display.value.length < 8)) {
            if (display.value == "0") {
                display.value = event.key;
            } else {
                display.value += event.key;
            }
        }
        // Clear display
        if (["Delete", "Backspace"].indexOf(event.key) > -1) {
            display.value = "0";
        }*/

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
                subtotal = parseInt(display.value);
                editable = false;
                break;
            case "=":
            case "Enter":
                display.value = (parseInt(display.value) + subtotal).toString();
                editable = false;
                break;
        }

        console.log(event.key);

    };
};