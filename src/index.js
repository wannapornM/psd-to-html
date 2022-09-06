// .head-main
function showDropdown(menu) {
  menu.classList.add("hrv-orange-text");
  hiddenMenu = document.getElementById(menu.id).childNodes[3];
  hiddenMenu.style.visibility = "visible";
}

function hideDropdown(menu) {
  menu.classList.remove("hrv-orange-text");
  hiddenMenu = document.getElementById(menu.id).childNodes[3];
  hiddenMenu.style.visibility = "hidden";
}

// .stickt-head
const stickyHeadBar = document.getElementById("sticky-bar");

window.onscroll = function () {
  if (window.pageYOffset > 160) {
    stickyHeadBar.classList.add("show-sticky");
  } else {
    stickyHeadBar.classList.remove("show-sticky");
  }
};

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

function toggleItem(btnExpander, listId, sublistId) {
  const listElement = document.getElementById(listId);
  const subListElement = document.getElementById(sublistId);
  const angleDownIcon = btnExpander.childNodes[1];

  if (listElement.classList.contains("dropdown")) {
    listElement.setAttribute("class", "item");
    subListElement.setAttribute("class", "sublists");
    btnExpander.setAttribute("class", "expander");
    angleDownIcon.style.transform = "rotate(0deg)";
  } else {
    listElement.setAttribute("class", "change-style-item dropdown");
    subListElement.setAttribute("class", "show-sublists");
    btnExpander.setAttribute("class", "btnToggle");
    angleDownIcon.style.transform = "rotate(180deg)";
  }
}

// Home section
const imgUrl = [
  "http://wp1.efforttech.com/newwp/hairly/wp-content/uploads/2022/04/image-1-1.jpg",
  "http://wp1.efforttech.com/newwp/hairly/wp-content/uploads/2022/04/8-1.jpg",
  "http://wp1.efforttech.com/newwp/hairly/wp-content/uploads/2022/04/001.jpg",
];

const dots = document.querySelectorAll(".dot");
const sectionHome = document.querySelector(".home-body");

let indx = 1;

setInterval(sliderImages, 3000);

function sliderImages() {
  if (indx > imgUrl.length - 1) {
    indx = 0;
  }

  sectionHome.style.backgroundImage = `url(${imgUrl[indx]})`;

  removeBackgroundDotSteps();
  dots[indx].classList.add("active");

  indx++;
}

function removeBackgroundDotSteps() {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
}
