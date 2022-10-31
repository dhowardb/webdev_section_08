const inputElement = document.getElementById('product-name');

const spanElement = document.getElementById('remaining-chars');

// console.log(spanElement.textContent);
function onInputChange(event) {
    // console.log(event.target.value);
    // let enteredText = event.target.value;
    const enteredTextlength = event.target.value.length;
    const remainingChars = event.target.maxLength - enteredTextlength;
    spanElement.textContent = remainingChars;
    
    if ( remainingChars <= 10 ) {
        onInputWarning();
    }
    else {
        onChangeToDefault();
    }
    
}

function onInputWarning() {
        //function to make input box red
        //function to disable submit button

        console.log("Warning input!!")
        spanElement.classList.add('warning');
        inputElement.classList.add('warning');
}

function onChangeToDefault() {
    spanElement.classList.remove('warning');
    inputElement.classList.remove('warning');
}

inputElement.addEventListener("input", onInputChange );
