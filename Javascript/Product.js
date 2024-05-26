// var kpermCarousel = document.querySelector("#mycarousel1");
// if (window.matchMedia("(min-width: 768px)").matches) {
//   var carousel = new bootstrap.Carousel(kpermCarousel, {
//     interval: false,
//   });
//   var carouselCard = $(".carousel-inner")[0].scrollWidth;
//   var cards = $(".carousel-item").width();
//   var scrolling = 0;
//   var fullScrolling = carouselCard - cards * 4;

//   $("#mycarousel1 .carousel-control-next").on("click", function () {
//     if (scrolling < fullScrolling) {
//       scrolling += cards;
//     } else {
//       // If at the end, reset to the first card
//       scrolling = 0;
//     }
//     $("#mycarousel1 .carousel-inner").animate({ scrollLeft: scrolling }, 100);
//   });

//   $("#mycarousel1 .carousel-control-prev").on("click", function () {
//     if (scrolling > 0) {
//       scrolling -= cards;
//     } else {
//       // If at the beginning, scroll to the last set of cards
//       scrolling = fullScrolling;
//     }
//     $("#mycarousel1 .carousel-inner").animate({ scrollLeft: scrolling }, 100);
//   });
// } else {
//   $(kpermCarousel).addClass("slide");
// }
