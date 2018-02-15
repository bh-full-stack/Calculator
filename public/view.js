function displayFactory() {
    const DISPLAY_LENGTH = 8;
    var displayDomElement = document.querySelector("#display");
    return {
        numberAddDigit: function (digit) {
            if (digit === "." && displayDomElement.innerText.indexOf(".") === -1) {
                    displayDomElement.innerHTML += "<span>.</span>";
            } else {
                if (displayDomElement.innerText === "0") {
                    displayDomElement.innerText = digit.toString();
                } else if (displayDomElement.innerText.replace(".", "").length < DISPLAY_LENGTH) {
                    displayDomElement.innerHTML += digit;
                }
            }
            return false;
        },
        numberShow: function (value) {
            if (value === Infinity) {
                displayDomElement.innerText = "ERROR";
                return true;
            } else {
                if (Math.floor(value).toString().replace(".", "").length <= DISPLAY_LENGTH) {
                    var valueString = value.toString();
                    if (valueString.indexOf(".") > -1) {
                        displayDomElement.innerHTML = valueString
                            .slice(0, 9)
                            .replace(".", "<span>.</span>");
                    } else {
                        displayDomElement.innerText = valueString;
                    }
                    return false;
                } else {
                    displayDomElement.innerText = "ERROR";
                    return true;
                }
            }
        },
        numberReset: function () {
            displayDomElement.innerHTML = "0";
        },
        numberValue: function () {
            return parseFloat(displayDomElement.innerText);
        },
        numberLengthWithDot: function () {
            return displayDomElement.innerText.length;
        },
        numberHasDot: function () {
            return displayDomElement.innerHTML.indexOf(".") > -1;
        },
        numberBackspace: function () {
            displayDomElement.innerHTML = displayDomElement
                .innerText
                .slice(0, displayDomElement.innerText.length -1)
                .replace(".", "<span>.</span>");
        }
    };
}