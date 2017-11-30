function operation(operand1, operand2, operator) {
    switch (operator) {
        case "+":
            return sinfulMath.add(operand1, operand2);
        case "-":
            return sinfulMath.sub(operand1, operand2);
        case "*":
            return sinfulMath.mul(operand1, operand2);
        case "/":
            return sinfulMath.div(operand1, operand2);
    }
}