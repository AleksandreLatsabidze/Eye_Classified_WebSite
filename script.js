document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("toggleButton");
  var myDiv = document.getElementById("emptyDiv");

  button.addEventListener("click", function () {
    myDiv.style.display = "block";
  });

  document.addEventListener("click", function (event) {
    if (!myDiv.contains(event.target) && event.target !== button) {
      myDiv.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("searchtoggleButton");
  var myDiv = document.getElementById("searchemptyDiv");

  button.addEventListener("click", function () {
    myDiv.style.display = "block";
  });

  document.addEventListener("click", function (event) {
    if (!myDiv.contains(event.target) && event.target !== button) {
      myDiv.style.display = "none";
    }
  });
});
/*******************************************************************************/
let hideBtnNav = document.querySelector(".hideBtnNav");
let leftNav = document.querySelector(".HLeftNav");
let hideMainDiv = document.querySelector(".hideX");
hideBtnNav.addEventListener("click", function () {
  leftNav.classList.add("leftnavActive");
});

hideMainDiv.addEventListener("click", function () {
  leftNav.classList.remove("leftnavActive");
});

// ერთ ბათონზე გამოტანა გაქრობა *********************************************
// hideBtnNav.addEventListener("click", function () {
//   hiddenDiv.classList.toggle("hidden");
//   if (hiddenDiv.classList.contains("hidden")) {
//     leftNav.classList.add("leftnavActive");
//   } else {
//     leftNav.classList.remove("leftnavActive");
//   }
// });

// Initialize Swiper *************************************************

let swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,
  // effect: "fade",
  speed: 1200,
  autoplay: false,
  delay: 3000,
  simulateTouch: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swipers = new Swiper(".mySwipers", {
  slidesPerView: 5,
  freeMode: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    700: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1250: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
});
