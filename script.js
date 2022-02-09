const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

function showPicture() {
    var sourceOfPicture = "images/raccoon.png";
    var img = document.getElementById('raccoon')
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "block";
  }