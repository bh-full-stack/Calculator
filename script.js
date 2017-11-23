window.onload = function() {
    document.querySelector("input").onkeypress = function() {
        return event.charCode >= 48 && event.charCode <= 57;
    }
};