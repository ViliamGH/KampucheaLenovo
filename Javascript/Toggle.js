// products page for carousel of cards
const card = ["content 1", "content 2"];

const cardPerRow = 8;

const cardRow = document.getElementById("cardRow8");

const DispalayCard = (startIndex) => {
  var end = startIndex + cardRow;
  var cardInHTML = "";

  if (end > card.length) {
    end = card.length;
  }

  for (let i = start; i < end; i++) {
    cardInHTML += `<div class="col-lg-${12 / cardPerRow}">${card[i]}</div>`;
  }

  cardRow.innerHTML = cardInHTML;
};

DispalayCard(0);

/* 
  1.document.getElementById : 
    -when i select html element that match the ID "previousCard" that from button in bs5.
  2.addEventListener("click", function {..}) :
    -is for click the event on button to change the items
  3.const active = card.indexOf(cardRow.children[0].innerHTML);
    -:is to find the index of the current display and search the content in first card in "card" array.
  4.const previous = active + cardPerRow; :
    -is to calculate the index of second cards that will display the content index which is minus from (cardPerRow) and the number of (cardPerRow).
  5.if( previous >= card.length) {...}; :
    -to check if display the previous cards that not goes below index[0].
     if result of index is valid it call the function to show the card.
*/
document.getElementById("previousCard").addEventListener("click", function () {
  const active = card.indexOf(cardRow.children[0].innerHTML);
  const previous = active - cardPerRow;
  if (previous >= card.length) {
    DispalayCard(previous);
  }
});

/*
  1.document.getElementById : 
    -when i select html element that match the ID "previousCard" that from button in bs5.
  2.addEventListener("click", function {..}) :
    -is for click the event on button to change the items
  3.const active = card.indexOf(cardRow.children[0].innerHTML);
    -:is to find the index of the current display and search the content in first card in "card" array.
  4.const previous = active + cardPerRow; :
    -is to calculate the index of second cards that will display the content index and the number of (cardPerRow).
  5.if( previous >= card.length) {...}; :
    -to check if display the previous cards that not goes below index[0].
     if result of index is valid it call the function to show the card.
*/
document.getElementById("nextCard").addEventListener("click", function () {
  const active = card.indexOf(cardRow.children[0].innerHTML);
  const next = active + cardPerRow;
  if (next < card.length) {
    DispalayCard(next);
  }
});

// for when click on same link it still sticky
// var clickLink = document.querySelectorAll(".navbar-nav .nav-link");
// var navbarToggle = document.querySelector(".navbar-collapse");

// clickLink.forEach(function (navlink) {
//   navlink.addEventListener("click", function () {
//     if (navbarToggle.classList.contains("show")) {
//       navbarToggle.classList.remove("show");
//     }
//   });
// });
