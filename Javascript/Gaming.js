document
  .querySelectorAll(".container-popup-img img")
  .forEach((image) => {
    image.onclick = () => {
      document.querySelector(".popup-img").style.display = "block";
      document.querySelector(".popup-img img").src = image.getAttribute("src");
      // showContent(index + 1);
    };
  });

document.querySelector(".popup-img span").onclick = () => {
  document.querySelector(".popup-img").style.display = "none";
};

// add content on each images in loop
// function showContent(indexImage) {
//   const content = document.getElementById("contentImage");
//   const statement = document.getElementById("statementImage");

//   const statements = {
//     1: '<div class="styled-text1">1</div>',
//     2: '<div class="styled-text2">2</div>',
//     3: '<div class="styled-text3">3</div>',
//   };
//   statement.innerHTML = statements[indexImage];
//   content.style.display = "block";
// }
