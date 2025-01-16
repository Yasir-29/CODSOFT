const displays = document.getElementById("display");

function adisplay(input) {
    displays.value += input;
}

function clearDisplay() {
    displays.value = "";
}

function calculate() {
    try {
        displays.value = eval(displays.value);
    } catch (e) {
        displays.value = "Error";
    }
}
