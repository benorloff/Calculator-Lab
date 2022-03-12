
// Declare button element

const button = document.querySelectorAll('button');

const nonInputVals = ['CE', 'C', '=']

// Declare the result span
const result = document.getElementById('result');

//Set initial result of zero
let initialOutput = 0;
let output = 0;
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
                console.log(eval(result.innerText.valueOf()));
                result.innerText = (eval(result.innerText.valueOf()));
            }
        } 
    }
})