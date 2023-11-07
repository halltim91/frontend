const form = document.querySelector('form');
const elements = form.elements;

form.addEventListener('submit', onsubmit);
function onsubmit(event) {
  let output = '';
  let e;
  for (let i = 0; i < elements.length; i++) {
    e = elements[i];
    if (e.id !== '') {
      output += e.id + ': ';
      output += e.type === 'checkbox' ? e.checked : e.value;
      output += '\n';
    }
  }
  console.log(output);
  event.preventDefault();
}
