let clickSearch = document.querySelector(".localFormOne");
let showNav = document.querySelector(".localFormList");
clickSearch.addEventListener("click", () => {
  showNav.style.display = "block";
  //   showNav.classList.add("active");
  //   showNav.classList.remove("active");
});

let clickForm = document.querySelector(".localForm");
let showList = document.querySelector(".searchNav");
clickForm.addEventListener("click", () => {
  showList.style.display = "block";
  //   showNav.classList.add("active");
  //   showNav.classList.remove("active");
});
