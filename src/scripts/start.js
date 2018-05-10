// Used to toggle the menu on small screens when clicking on the menu button
function navBarFunction() {
  var navBar = document.getElementById("navBar");
  if (navBar.className.indexOf("w3-show") == -1) {
    navBar.className += " w3-show";
  } else {
    navBar.className = navBar.className.replace(" w3-show", "");
  }
}

function navAboutFunction() {
  var aboutDiv = document.getElementById("about");
  aboutDiv.classList.remove("w3-hide");

  var aboutHeader = document.getElementById("aboutHeader");
  aboutHeader.classList.remove("w3-hide");

  var homeDiv = document.getElementById("home");
  homeDiv.classList.add("w3-hide");

  var aboutBar = document.getElementById("aboutBar");
  aboutBar.classList.remove("w3-white");
  aboutBar.classList.add("w3-hover-white");
  aboutBar.classList.add("w3-hide-small");
}

function navHomeFunction() {
  var aboutDiv = document.getElementById("home");
  aboutDiv.classList.remove("w3-hide");

  var homeDiv = document.getElementById("about");
  homeDiv.classList.add("w3-hide");

  var aboutHeader = document.getElementById("aboutHeader");
  aboutHeader.classList.add("w3-hide");
}
