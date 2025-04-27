var one = document.getElementById("first");
var two = document.getElementById("second");
var three = document.getElementById("third");

one.addEventListener("click", display);
two.addEventListener("click", display);
three.addEventListener("click", display);

function display() {
  var allImages = document.querySelectorAll("img");

  for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}