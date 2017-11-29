function displayFactory() {
    var displayDomElement = document.querySelector("#display");
    return {
        appendValue: function (digit) {
            if (digit == Infinity) {
                displayDomElement.value = "Error";
                return true;
            }
            if (displayDomElement.value == "0" && digit != ".") {
                displayDomElement.value = digit.toString();
            } else {
                displayDomElement.value += digit.toString();
            }
            return false;
        },
        numberReset: function () {
            displayDomElement.value = "0";
        },
        numberValue: function () {
            return displayDomElement.value;
        },
        numberLength: function () {
            return displayDomElement.length;
        },
        numberHasDot: function () {
            return displayDomElement.value.indexOf(".") > -1;
        }
    };
}
