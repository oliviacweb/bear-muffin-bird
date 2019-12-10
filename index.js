var addBearBtn = document.querySelector('.bear-btn');
var addMuffinBtn = document.querySelector('.muffin-btn');
var addBirdBtn = document.querySelector('.bird-btn');
var allItems = document.querySelector('.items');

addBearBtn.addEventListener('click', addBear);
addMuffinBtn.addEventListener('click', addMuffin);
addBirdBtn.addEventListener('click', addBird);

function addBear() {
  allItems.innerHTML += `<p class="item">🐻</p>`;
}

function addMuffin() {
  allItems.innerHTML += `<p class="item">🧁</p>`;
}

function addBird() {
  allItems.innerHTML += `<p class="item">🐦</p>`;
}

var itemParent = document.querySelector(".items");

itemParent.addEventListener('click', removeEmoji);

function removeEmoji() {
if(event.target.classList.contains("item")) {
  event.target.style.display = "none";
 }
}
