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
