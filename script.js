window.onload = function() {
    var display = document.querySelector("#display");
    display.value = "0";
    document.onkeydown = function(event) {
        // Handle numbers
        var allowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(event.key) > -1;
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
        }
    };
};