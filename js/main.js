/*----- constants -----*/
//this creates an operator lookup
var operators = {
    '+': function (a, b) {return a + b;},
    '−': function (a, b) {return a - b;},
    '×': function (a, b) {return a * b;},
    '÷': function (a, b) {return a / b;},
};

/*----- app's state (variables) -----*/
var input, firstNum, operator, result


/*----- cached element references -----*/
//this is where we hang on to elements
var display = document.getElementById('display');

/*----- event listeners -----*/
//
document.querySelector('table').addEventListener('click', function(evt) {
   //when user clicks on display, nothing happens
    if(evt.target.id === 'display') return;
    //store the numbers that are clicked in variable text
    var text = evt.target.textContent;
    //
    switch (text) {
        case 'AC':
            initialize();
            break;
        case '+':
            if (!input) return;
            setOp(text);
            break;
        case '−':
            if (!input) return;
            setOp(text);
            break;
        case '×':
            if (!input) return;
            setOp(text);
            break;
        case '÷':
            if (!input) return;
            setOp(text);
            break;  
        case '=':
            if (!input || !firstNum || !operator) return;
            //result declared as part of our state
            //operator(); is the function we are invoking
            result = operator(parseFloat(firstNum), parseFloat(input));
            break;
        //when the decimal is clicked if it doesnt exist yet, add . to input
        case '.':
            if(!input.includes('.')) input += '.';
            break;

            //show the numbers clicked on the display
        default: 
            input += text;    

    }

    render();
});

/*----- functions -----*/


function initialize() {
    input = '';
    firstNum = operator = result = null;
}

function render () {
    //if input was an empty string should be 0
    //if theres a result, display that, if not, display input
    display.textContent = (result === 0 && '0') || result || input || '0';
    //allows you to start entering more numbers to restart calculator
    if (result) initialize();
}

//the op parameter i
function setOp(op) {
    //updating the operator state variable whehn clicked
    //the text in the bracket here is the plus sign meaing the + is clicked
    operator = operators[op];
    //store the first input to the firstNum
    firstNum = input;
    input = '';
}

//initialize and render
initialize();
render();