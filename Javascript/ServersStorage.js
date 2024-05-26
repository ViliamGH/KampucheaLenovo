// document.getElementById("clickVideo").addEventListener("click", function () {
//   var video = document.getElementById("clickVideo");
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
// });

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

function closeVideo() {
    var videoFrame = document.getElementById('videoFrame');
    videoFrame.src = ''; // Stops the video by emptying the src attribute
    videoFrame.parentNode.removeChild(videoFrame);

    var closeButton = document.getElementById('closeButton');
    closeButton.parentNode.removeChild(closeButton);
}
