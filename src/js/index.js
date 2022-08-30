let buttonToggleMode = document.querySelector("#symetra-logo");
7;

buttonToggleMode.addEventListener("click", () => {
  let page = document.querySelector("body");
  page.classList.toggle("dark");

  page.classList[0] === "dark"
    ? (buttonToggleMode.style.backgroundImage =
        "url('../src/images/SunFull.png')")
    : (buttonToggleMode.style.backgroundImage = "url('../src/images/Sun.png')");
});

let buttonToggleMenu = document.querySelector(".icon-menu");

buttonToggleMenu.addEventListener("click", () => {
  let nav = document.querySelector(".menu");
  buttonToggleMenu.classList.toggle("active-icon");
  nav.classList.toggle("active");
});
