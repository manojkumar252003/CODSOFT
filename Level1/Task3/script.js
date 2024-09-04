// script.js

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').innerText = '';
}

// Function to append numbers/operators to the display
function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.innerText;

    // Check if the expression is valid
    if (expression) {
        // Perform calculation and display the result
        const result = eval(expression);
        display.innerText = result;
    } else {
        display.innerText = '';
    }
}
