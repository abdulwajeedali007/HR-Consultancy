$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 6,
    loop: true,
    margin: 10,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 6,
        loop: false,
      },
    },
  });
});

// year adding in footer
const year = new Date().getFullYear();
document.querySelector(".year").innerText = `© ${year}. | ALLRIGHTS RESERVED`;
