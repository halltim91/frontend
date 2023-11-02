// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";
const content = document.getElementById("content");

fetch(url)
  .then((resp) => resp.json())
  .then(displaystuff)
  .catch((err) => console.log(`error getting data: ${err}`));

function displaystuff(data) {
  let character;
  for (let i = 0; i < data.length; i++) {
    content.appendChild(createElement(data[i]));
  }
  return data;
}

function createElement(character) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("h4");
  const title = document.createElement("p");

  div.classList.add("mycard");
  img.src = character.imageUrl;
  img.alt = character.image;
  name.innerText = character.fullName;
  title.innerText = character.title;

  div.appendChild(img);
  div.appendChild(name);
  div.appendChild(title);

  return div;
}
