import img1 from "../assets/image1.jpeg";
import img2 from "../assets/image2.jpeg";
import img3 from "../assets/image3.jpeg";

// .stickt-head
const stickyHeadBar = document.getElementById("sticky-bar");

window.onscroll = function () {
  if (window.pageYOffset > 160) {
    stickyHeadBar.classList.add("show-sticky");
  } else {
    stickyHeadBar.classList.remove("show-sticky");
  }
};

// Home section
const imgUrl = [img1, img2, img3];
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
