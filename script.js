window.onload = function() {
    document.querySelector("input").onkeypress = function(event) {
        var allowed = event.charCode >= 48 && event.charCode <= 57;
        console.log(allowed);
        if (!allowed) {
            event.preventDefault();
        }
    }
};