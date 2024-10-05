var screen = document.getElementById('screen');
var clean = document.getElementById('clean');
var result = document.getElementById('result');
// counter = localStorage.length;
var operations = [
    "+",
    "-",
    "*",
    "/",
    "**"
]
function addKey(value) {
    if (operations.includes(value) && operations.includes(screen.value[screen.value.length - 1]) ) {
        return false;
    }
    screen.value += value;
}
clean.addEventListener('click', () => {
    screen.value = "";
});
result.addEventListener('click', () => {
    var data = {operation: screen.value, result: eval(screen.value)};
    localStorage.setItem(localStorage.length, JSON.stringify(data))
    screen.value = eval(screen.value);
});