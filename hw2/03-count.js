const textInput = document.getElementById('input');
const text = document.getElementById('text');
const origText = text.innerHTML;

textInput.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  if (event.key === 'Enter') {
    const word = event.target.value.trim().split(' ')[0]; //ignores anything after first word
    if (word.length > 0) {
      text.innerHTML = origText.replaceAll(
        ' ' + word + ' ',
        ' <mark>' + word + '</mark> '
      );
    } else {
      text.innerHTML = origText;
    }
  }
}
