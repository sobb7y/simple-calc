let output = document.getElementById('output');

function addOutput(value) {
    output.value += value;
}

function clearOutput() {
    output.value = '';
}

function deleteLastChar() {
    output.value = output.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(output.value);
        if (isNaN(result)) {
            output.value = 'Error';
        } else {
            output.value = result;
        }
    } catch (e) {
        output.value = 'Error';
    }
}