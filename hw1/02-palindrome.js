const elem = document.querySelector('input');
const output = document.querySelector('#status')

elem.addEventListener('input', handleInput);
function handleInput(event) {
    const input = event.target.value;
    if(input.length === 0){
        output.textContent = " ";
    } else if (input < 0) {
        setOutputText('Must be a positive number')
    } else {
        for(let i = 0; i < input.length / 2; i++){
            if(input[i] !== input[input.length - (1 + i)]){
                setOutputText('No. Try again.', false);
                return;
            }
        }
        setOutputText('Yes. This is a palindrome!', true);
    }
}

function setOutputText(text, isValid){
    output.textContent = text;
    if(isValid){
        output.classList.add('text-success');
        output.classList.remove('text-danger');
    } else {
        output.classList.add('text-danger');
        output.classList.remove('text-success');
    }
}