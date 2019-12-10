var addBearBtn = document.querySelector('.bear-btn');
var addMuffinBtn = document.querySelector('.muffin-btn');
var addBirdBtn = document.querySelector('.bird-btn');
var allItems = document.querySelector('.items');
var buttonParent = document.querySelector(".add-buttons");

// addBearBtn.addEventListener('click', addBear);
// addMuffinBtn.addEventListener('click', addMuffin);
// addBirdBtn.addEventListener('click', addBird);
buttonParent.addEventListener('click', handler)

function handler() {
  if(event.target == addBearBtn) {
    addBear();
  }
  if(event.target == addBirdBtn) {
    addBird();
  }
  if(event.target == addMuffinBtn) {
    addMuffin();
  }
  // addBearBtn.onclick = addBird();
  // // addBearBtn.onlclick = addBear();
  // addBearBtn.onlclick = addBear();

}

function addBear() {
  allItems.innerHTML += `<p class="item bear">🐻</p><p class="bear-response"></p>`;
}

function addMuffin() {
  allItems.innerHTML += `<p class="item muffin">🧁</p>`;
}

function addBird() {
  allItems.innerHTML += `<p class="item bird">🐦</p>`;
}

var itemParent = document.querySelector(".items");

itemParent.addEventListener('click', removeEmoji);

function removeEmoji() {
var bearResponse = document.querySelector(".bear-response");
if(event.target.classList.contains("bird") || event.target.classList.contains("muffin")) {
  event.target.style.display = "none";
 }
 if(event.target.classList.contains("bear")) {
   bearResponse.innerText = "GRRRR";
   // console.log("grr");
 }
}
