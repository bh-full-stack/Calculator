function displayFactory() {
    var displayDomElement = document.querySelector("#display");
    return {
        appendValue: function (digit) {
            if (digit == Infinity) {
                displayDomElement.innerHTML = "Error";
                return true;
            }
            var preparedDigit = digit.toString().replace(".", "<span>.</span>");
            if (displayDomElement.innerHTML == "0" && digit != ".") {
                displayDomElement.innerHTML = preparedDigit;
            } else {
                displayDomElement.innerHTML += preparedDigit;
            }
            return false;
        },
        numberReset: function () {
            displayDomElement.innerHTML = "0";
        },
        numberValue: function () {
            return displayDomElement.innerText;
        },
        numberLength: function () {
            console.log(displayDomElement.innerText.replace(".", "").length, "length");
            return displayDomElement.innerText.replace(".", "").length;
        },
        numberHasDot: function () {
            return displayDomElement.innerHTML.indexOf(".") > -1;
        }
    };
}
