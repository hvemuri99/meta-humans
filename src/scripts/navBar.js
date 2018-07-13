// Used to toggle the menu on small screens when clicking on the menu button
function navBarFunction() {
  var navBar = document.getElementById("navBar");
  if (navBar.className.indexOf("w3-show") == -1) {
    navBar.className += " w3-show";
  } else {
    navBar.className = navBar.className.replace(" w3-show", "");
  }
}

function navFunction(currentBar, currentDiv) {
  modifyNavBars(currentBar);
  modifyNavDivs(currentDiv);
}

function modifyNavBars(currentBar) {
  $(navBar)
    .children()
    .removeClass();

  $(navBar)
    .children()
    .addClass(
      "w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
    );

  $(currentBar).removeClass();
  $(currentBar).addClass("w3-bar-item w3-button w3-padding-large w3-white");
}

function modifyNavDivs(currentDiv) {
  $(about).removeClass("w3-hide");
  $(home).removeClass("w3-hide");

  if (currentDiv !== "home") {
    $(home).addClass("w3-hide");
  }
  if (currentDiv !== "about") {
    $(about).addClass("w3-hide");
  }
}

function searchMetas() {
  var http = new XMLHttpRequest();
  var request = {
    superStrength: "superspeed",
    timestamp: ""
  };
  http.open("post", "http://localhost:8080/metas/fetch/v1", false);
  http.setRequestHeader("Content-Type", "application/json");
  http.setRequestHeader("Authorization","Basic ZHJmaXJzdDpEcmZpcnN0MTIzNA==")
  http.send(request);
  http.onreadystatechange = function() {
    if (this.readyState == 4 && http.status == 200) {
      $(block1).remove();
      $(block2).remove();
    }
    console.log(http.responseText);
  };
}
