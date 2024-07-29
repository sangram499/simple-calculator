let display = document.getElementById('display');
let currentInput = '';
let operator = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString(); // Update currentInput with result for further calculations
    } catch (error) {
        display.value = 'Error';
    }
}
