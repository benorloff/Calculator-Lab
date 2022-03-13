
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

// Declare the total to store values during calculations. 
let total = 0;

//Set initial result of zero
result.innerText = total;

// Listen for button clicks
document.addEventListener('click', function btnClick(btn) {
    // Filter out non-button clicks
    if (btn.target.tagName === 'BUTTON') {
        // Prevent leading zero
        if (total === 0) {
            // Prohibit 'CE' and 'C' when output is already 0
            if (btnArr.rst.includes(btn.target.value) === false) {
                total = btn.target.value;
                result.innerText = total;
            }
        // Handle 'C' and 'CE' clicks
        } else if (btnArr.rst.includes(btn.target.value)) {
            total = 0;
            result.innerText = total;
        // Append number
        } else if ((Number.isInteger(parseInt((btn.target.value)))) || (btn.target.value === '.')) {
            result.append(btn.target.value);
        // Append operator
        } else if (btnArr.opr.includes(btn.target.value)) {
            result.append(btn.target.value);
        // Evaluate result and update screen
        } else if (btnArr.eql.includes(btn.target.value)) {
            total = eval(result.innerText.valueOf());
            result.innerText = total;
        }
    }
})