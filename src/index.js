// .head-main
function showDropdown(element) {
  child = document.getElementById(element.id).childNodes[3];
  child.style.visibility = "visible";
}

function hideDropdown(element) {
  child = document.getElementById(element.id).childNodes[3];
  child.style.visibility = "hidden";
}

// .nav-hidden
const mainApp = document.getElementById("main-app");
const navHiddenPanel = document.getElementById("nav-hidden");
const hamburgIcon = document.getElementById("hamburger");
const closeIcon = document.getElementById("hidden-close-icon");

hamburgIcon.addEventListener("click", () => {
  mainApp.classList.add("fix-screen");
  navHiddenPanel.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  mainApp.classList.remove("fix-screen");
  navHiddenPanel.style.display = "none";
});

function toggleItem(item) {
  console.log(item);
  const subListElement = item.childNodes[5];
  const btnExpander = item.childNodes[3];
  const icon = btnExpander.childNodes[1];

  if (item.classList.contains("dropdown")) {
    item.setAttribute("class", "item");
    subListElement.setAttribute("class", "sublists");
    btnExpander.setAttribute("class", "expander");
    icon.style.transform = "rotate(0deg)";
  } else {
    item.setAttribute("class", "change-style-item dropdown");
    subListElement.setAttribute("class", "show-sublists");
    btnExpander.setAttribute("class", "btnToggle");
    icon.style.transform = "rotate(180deg)";
  }
}
