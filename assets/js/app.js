var screen = document.getElementById('screen');
var clean = document.getElementById('clean');
var result = document.getElementById('result');
function addKey(value) {
    console.log(value);
    screen.value += value;
}
clean.addEventListener('click', () => {
    screen.value = "";
});
result.addEventListener('click', () => {
    screen.value = eval(screen.value);
});