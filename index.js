function myFunction() {
  //change the darkmode icon
  var icon = document.getElementById("nightModeIcon1");
  if (icon.style.display === "block") {
    icon.style.display = "none";
    var icon2 = document.getElementById("nightModeIcon2");
    icon2.style.display = "block";
  } else {
    icon.style.display = "block";
    var icon2 = document.getElementById("nightModeIcon2");
    icon2.style.display = "none";
  }
  //add dark mode styling
  var element = document.body;
  element.classList.toggle("dark-mode");
  var cards = document.getElementsByClassName("containerChild");
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("dark-mode2");
  }
  var socials = document.getElementsByClassName("socials");
  for (let i = 0; i < socials.length; i++) {
    socials[i].classList.toggle("dark-mode3");
  }
  var navbarText = document.getElementsByClassName("navbarText");
  for (let i = 0; i < navbarText.length; i++) {
    navbarText[i].classList.toggle("dark-mode4");
  }
  var navBar = document.getElementById("navBar");
  navBar.classList.toggle("dark-mode5");
  var socialHeader = document.getElementsByClassName("socialHeader");
  for (let i = 0; i < socialHeader.length; i++) {
    socialHeader[i].classList.toggle("dark-mode6");
  }
  var homeIcon = document.getElementById("home");
  homeIcon.classList.toggle("dark-mode7");
}
