
// Declare button

const button = document.querySelectorAll('button');

// Declare the calc buttons
const btn = {
    CE: document.getElementById('btnCE'),
    Divide: document.getElementById('btnDivide'),
    Multiply: document.getElementById('btnMultiply'),
    Seven: document.getElementById('btnSeven'),
    Eight: document.getElementById('btnEight'),
    Nine: document.getElementById('btnNine'),
    C: document.getElementById('btnC'),
    Four: document.getElementById('btnFour'),
    Five: document.getElementById('btnFive'),
    Six: document.getElementById('btnSix'),
    Minus: document.getElementById('btnMinus'),
    One: document.getElementById('btnOne'),
    Two: document.getElementById('btnTwo'),
    Three: document.getElementById('btnThree'),
    Plus: document.getElementById('btnPlus'),
    Zero: document.getElementById('btnZero'),
    Dot: document.getElementById('btnDot'),
    Equal: document.getElementById('btnEqual')
}

// Declare the result span
const result = document.getElementById('result');

//Set initial result of zero
let initialOutput = 0;
let output = '';
result.innerText = initialOutput;


document.addEventListener('click', function buttonClick(e) {
    if (e.target.tagName === 'BUTTON') {
        if (result.innerText == initialOutput) {
            output = e.target.value;
            result.innerText = output;
        }  
        else if (result.innerText != initialOutput) {
            if ((e.target.value !== '=') && (e.target.value !== 'C') && (e.target.value !== 'CE')) {
                result.append(e.target.value);
            } else if ((e.target.value === 'C') || (e.target.value === 'CE')) {
                result.innerText = 0;
            } else if (e.target.value === '=') {
                console.log('The equal sign was pressed');
            }
        }
    }
})



console.log(btn);

console.log(btn.Eight.value)

console.log(output * btn.Eight.value);