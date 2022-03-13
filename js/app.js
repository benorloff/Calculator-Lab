
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
            subTotal = btn.target.value
            console.log('subtotal is 0');
        } else {
            switch (true) {
                case (Number.isInteger(parseInt((btn.target.value)))):
                case (btn.target.value === '.'):
                    result.append(btn.target.value);
                    console.log(`${btn.target.value} is a number`);
                    break;
                case (btnArr.opr.includes(btn.target.value)):
                    result.append(btn.target.value);
                    console.log(`${btn.target.value} is an operator`);
                    break;
                case (btnArr.rst.includes(btn.target.value)):
                    subTotal = 0;
                    console.log(`${btn.target.value} is a reset`);
                    console.log(subTotal);
                    break;
                case (btnArr.eql.includes(btn.target.value)):
                    finalTotal = (eval(subTotal.valueOf()))
                    console.log(`${btn.target.value} is an equal`);
                    break;
            }
        }
    }
})

// function btnInput(btn) {
//     // document.addEventListener('click', function getBtnVal(btn) {
//         switch (true) {
//             case (Number.isInteger(parseInt((btn.target.value)))):
//             case (btn.target.value === '.'):
//                 console.log(`${btn.target.value} is a number`);
//                 break;
//             case (btnArr.opr.includes(btn.target.value)):
//                 console.log(`${btn.target.value} is an operator`);
//                 break;
//             case (btnArr.rst.includes(btn.target.value)):
//                 console.log(`${btn.target.value} is a reset`);
//                 break;
//             case (btnArr.eql.includes(btn.target.value)):
//                 console.log(`${btn.target.value} is an equal`);
//                 break;
//         }
//     // })
// } 

// btnInput();


// // List for button clicks and pass values
// document.addEventListener('click', function buttonClick(e) {
//     // Only pass values if elem clicked is button
//     if (e.target.tagName === 'BUTTON') {
//         // Handle first click
//         if (result.innerText == finalTotal) {
//             subTotal = e.target.value;
//             result.innerText = subTotal;
//         }  
//         // Subsequent clicks
//         else if (result.innerText != finalTotal) {
//             // Don't display non-integer and non-operator values
//             if ((e.target.value !== '=') && (e.target.value !== 'C') && (e.target.value !== 'CE')) {
//                 // result.append(e.target.value);
//             // Clear result with 'C' or 'CE' click
//             } else if ((e.target.value === 'C') || (e.target.value === 'CE')) {
//                 result.innerText = 0;
//             // Run calculation on equal button click
//             } else if (e.target.value === '=') {
//                 result.innerText = (eval(result.innerText.valueOf()));
//                 if (isNaN(result.innerText) === true) {
//                     result.innerText = 'ERR';
//                 }
//             }
//         } 
//     }
// })