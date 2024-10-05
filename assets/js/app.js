var screen = document.getElementById('screen');
var clean = document.getElementById('clean');
var result = document.getElementById('result');
var tbody = document.getElementById('tbody')
var operations = [
    "+",
    "-",
    "*",
    "/",
    "**",
    "."
]
function addKey(value) {
    if (operations.includes(value) && operations.includes(screen.value[screen.value.length - 1]) ) {
        return false;
    } else if (screen.value == "Math Error") {
        screen.value = "";
    }
    screen.value += value;
}
function copyContent (e) {
    console.log(e)
    navigator.clipboard.writeText(e.target.innerText)
    new Notification("Operacion copiada! :)")
}
function updateTable() {
    tbody.innerHTML = "";
    [...Array(localStorage.length).keys()].forEach((count) => {
        var info = JSON.parse(localStorage.getItem(count));
        tbody.innerHTML += `
        <tr onclick="copyContent(event)">
            <th scope="row" onclick="false">${count}</th>
            <td>${info.operation}</td>
            <td>${info.result}</td>
        </tr>
        `;
    });
}
updateTable();
clean.addEventListener('click', () => {
    screen.value = "";
});
result.addEventListener('click', () => {
    try {
        let result = eval(screen.value);
        if (isNaN(result)) {

            screen.value = "Math Error";
    
        } else {
            var data = {operation: screen.value, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// Advanced operations
var abs_button = document.getElementById('_abs');
var acos_button = document.getElementById('_acos');
var acosh_button = document.getElementById('_acosh');
var asin_button = document.getElementById('_asin');
var asinh_button = document.getElementById('_asinh');
var atan_button = document.getElementById('_atan');
var atan2_button = document.getElementById('_atan2');
var atanh_button = document.getElementById('_atanh');
var cbrt_button = document.getElementById('_cbrt');
var ceil_button = document.getElementById('_ceil');
var clz32_button = document.getElementById('_clz32');
var cos_button = document.getElementById('_cos');
var cosh_button = document.getElementById('_cosh');
var exp_button = document.getElementById('_exp');
var expm1_button = document.getElementById('_expm1');
var floor_button = document.getElementById('_floor');
var f16round_button = document.getElementById('_f16round');
var fround_button = document.getElementById('_fround');
var hypot_button = document.getElementById('_hypot');
var imul_button = document.getElementById('_imul');
var log_button = document.getElementById('_log');
var log10_button = document.getElementById('_log10');
var log1p_button = document.getElementById('_log1p');
var log2_button = document.getElementById('_log2');
var max_button = document.getElementById('_max');
var min_button = document.getElementById('_min');
var pow_button = document.getElementById('_pow');
var random_button = document.getElementById('_random');
var round_button = document.getElementById('_round');
var sign_button = document.getElementById('_sign');
var sin_button = document.getElementById('_sin');
var sinh_button = document.getElementById('_sinh');
var sqrt_button = document.getElementById('_sqrt');
var tan_button = document.getElementById('_tan');
var tanh_button = document.getElementById('_tanh');
var trunc_button = document.getElementById('_trunc');


var pi_button = document.getElementById('_pi');
var e_button = document.getElementById('_e');
var ln10_button = document.getElementById('_LN10');
var ln2_button = document.getElementById('_LN2');
var log10e_button = document.getElementById('_LOG10E');
var log2e_button = document.getElementById('_LOG2E');
var sqrt1_2_button = document.getElementById('_SQRT1_2');
var sqrt2_button = document.getElementById('_SQRT2');

var _PI = Math.PI;
var _E = Math.E;
var _LN10 = Math.LN10;
var _LN2 = Math.LN2;
var _LOG10E = Math.LOG10E;
var _LOG2E = Math.LOG2E;
var _SQRT1_2 = Math.SQRT1_2;
var _SQRT2 = Math.SQRT2;

pi_button.addEventListener('click', () => {
    screen.value += _PI.toFixed(5);
});
e_button.addEventListener('click', () => {
    screen.value += _E.toFixed(5);
});
ln10_button.addEventListener('click', () => {
    screen.value += _LN10.toFixed(5);
});
ln2_button.addEventListener('click', () => {
    screen.value += _LN2.toFixed(5);
});
log10e_button.addEventListener('click', () => {
    screen.value += _LOG10E.toFixed(5);
});
log2e_button.addEventListener('click', () => {
    screen.value += _LOG2E.toFixed(5);
});
sqrt1_2_button.addEventListener('click', () => {
    screen.value += _SQRT1_2.toFixed(5);
});
sqrt2_button.addEventListener('click', () => {
    screen.value += _SQRT2.toFixed(5);
});

// ABS Function
abs_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.abs(number);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `abs(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// ACOS
acos_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.acos(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// ACOSH
acosh_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.acosh(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

//  ASIN
asin_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.asin(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// ASINH
asinh_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.asinh(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// ATAN
atan_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.atan(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// ATAN2
atan2_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.atan2(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// ATANH
atanh_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.atanh(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// CBRT
cbrt_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.cbrt(number);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// CEIL
ceil_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.ceil(number);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// CLZ32
clz32_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.clz32(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// COS
cos_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.cos(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// COSH
cosh_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.cosh(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// EXP
exp_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.exp(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// EXPM1
expm1_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.expm1(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// FLOOR
floor_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.floor(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// F16ROUND
f16round_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        // let result = Math.f16round(number) * (180 / Math.PI);
        let result = "pepe"
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// FROUND
fround_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.fround(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
hypot_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.hypot(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
imul_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.imul(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
log_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.log(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
log10_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.log10(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
log1p_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.log1p(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
log2_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.log2(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
max_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.max(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
min_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.min(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
pow_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.pow(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
random_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.random(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
round_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.round(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
sign_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.sign(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
sin_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.sin(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
sinh_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.sinh(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
sqrt_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.sqrt(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
tan_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.tan(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
tanh_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.tanh(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});

// 
trunc_button.addEventListener('click', () => {
    try {
        let number = eval(screen.value);
        let result = Math.trunc(number) * (180 / Math.PI);
        if (isNaN(result)) {
            screen.value = "Math Error";
        } else {
            var data = {operation: `acos(${number})`, result: result};
            localStorage.setItem(localStorage.length, JSON.stringify(data))
            screen.value = result;
            updateTable() 
        }
    } catch (error) {
        screen.value = "Math Error";
    }
});
