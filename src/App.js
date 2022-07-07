// import masonry from "./utils/masonryGrid";

export default function App() {
  function resizeImage(image) {
    grid = document.getElementsByClassName("slideitem-salon-container")[0];

    rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );

    rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
    );

    rowSpan = Math.ceil(
      (item.querySelector(".img-item").getBoundingClientRect().height +
        rowGap) /
        (rowHeight + rowGap)
    );

    item.style.gridRowEnd = "span " + rowSpan;
  }

  function resizeAllImages() {
    allImgs = document.getElementsByClassName("img-tem");

    for (x = 0; x < allImgs.length; x++) {
      resizeImage(allImgs[x]);
    }
  }

  function resizeInstance(instance) {
    item = instance.elements[0];
    resizeImage(item);
  }

  window.onload = resizeAllImages();
  window.addEventListener("resize", resizeAllImages);

  allImgs = document.getElementsByClassName("img-item");

  for (x = 0; x < allImgs.length; x++) {
    imagesLoaded(allImgs[x], resizeInstance);
  }
}
