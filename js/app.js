
// Declare button element
const button = document.querySelectorAll('button');

// Declare the unique button ids and vals
const btnArr = {
    num: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
    opr: ['/', '*', '-', '+'],
    rst: ['CE', 'C'],
    eql: ['=']
}

// Declare the result span
const result = document.getElementById('result');

// Declare the calculation output.
let finalTotal = 0;

// Declare the total to store values during calculations. 
let subTotal = 0;

//Set initial result of zero
result.innerText = subTotal;

// Listen for button clicks
document.addEventListener('click', function btnClick(btn) {
    // Filter out non-button clicks
    if (btn.target.tagName === 'BUTTON') {
        // Prevent leading zero
        if (subTotal === 0) {
            subTotal = btn.target.value;
            result.innerText = subTotal;
            console.log('subtotal is 0');
        } else if (btnArr.rst.includes(btn.target.value)) {
            subTotal = 0;
            result.innerText = subTotal;
            console.log(`${btn.target.value} is a reset`);
            console.log(subTotal);
        } else if ((Number.isInteger(parseInt((btn.target.value)))) || (btn.target.value === '.')) {
            result.append(btn.target.value);
            console.log(`${btn.target.value} is a number`);
        } else if (btnArr.opr.includes(btn.target.value)) {
            result.append(btn.target.value);
            console.log(`${btn.target.value} is an operator`);
        } else if (btnArr.eql.includes(btn.target.value)) {
            subTotal = eval(result.innerText.valueOf());
            result.innerText = subTotal;
            console.log(subTotal)
            console.log(`${btn.target.value} is an equal`);
        }
    }
})