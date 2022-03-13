
// Declare button element
const button = document.querySelectorAll('button');

const btnArr = {
    num: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
    opr: ['/', '*', '-', '.'],
    rst: ['CE', 'C'],
    eql: ['=']
}

function btnVals() {
    button.forEach(item => {
        console.log(item.value)
        if (Number.isInteger(parseInt(item.value, 10) != NaN)) {
            console.log(item.value)
            btnArr.num.push(`${item.value}`)
        }
    })
}

btnVals();

// console.log(button)
// console.log(button[4].value);
// console.log(Number.isInteger(parseInt(button[4].value, 10)))
// console.log(btnArr)



// Declare the result span
const result = document.getElementById('result');

//Set initial result of zero
let initialOutput = 0;
let output = 0;
result.innerText = initialOutput;

// List for button clicks and pass values
document.addEventListener('click', function buttonClick(e) {
    // Only pass values if elem clicked is button
    if (e.target.tagName === 'BUTTON') {
        // Handle first click
        if (result.innerText == initialOutput) {
            output = e.target.value;
            result.innerText = output;
        }  
        // Subsequent clicks
        else if (result.innerText != initialOutput) {
            // Don't display non-integer and non-operator values
            if ((e.target.value !== '=') && (e.target.value !== 'C') && (e.target.value !== 'CE')) {
                result.append(e.target.value);
            // Clear result with 'C' or 'CE' click
            } else if ((e.target.value === 'C') || (e.target.value === 'CE')) {
                result.innerText = 0;
            // Run calculation on equal button click
            } else if (e.target.value === '=') {
                result.innerText = (eval(result.innerText.valueOf()));
                if (isNaN(result.innerText) === true) {
                    result.innerText = 'ERR';
                }
            }
        } 
    }
})