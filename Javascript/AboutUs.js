// click link and change content in a page
function showContent(contentId) {
  const contents = document.querySelectorAll(".contentGG");
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  const selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.classList.add("active");
  }
}
