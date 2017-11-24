window.onload = function() {
    var display = document.querySelector("#display");
    display.value = "0";
    document.onkeypress = function(event) {
        var allowed = event.charCode >= 48 && event.charCode <= 57;
        console.log(allowed && display.value.length);
        if (allowed && (display.value.length < 8)) {
            if (display.value == "0") {
                display.value = event.key;
            } else {
                display.value += event.key;
            }
        }
    };
};