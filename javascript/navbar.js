function PTnavigation() {
    var menuitem = document.getElementById("navbar");
    if (menuitem.className === "PTnav") {
      menuitem.className += " responsive";
    } else {
      menuitem.className = "PTnav";
    }
  }
  