const textInput = document.getElementById('input');
const text = document.getElementById('text');
const origText = text.innerHTML;

textInput.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
    if(event.key === 'Enter'){
        const word = event.target.value.trim().split(' ')[0];
        if(word.length > 0){
            const temp = origText.replaceAll(word, "<mark>" + word + "</mark>");
            text.innerHTML = temp;
        } else {
            text.innerHTML = origText;
        }
    }
}
