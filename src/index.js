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
function toggleItem(item) {
  const btnExpander = item.childNodes[3];
  const subListElement = item.childNodes[5];

  item.classList.contains("dropdown")
    ? item.classList.remove("dropdown")
    : item.classList.add("dropdown");

  subListElement.className === "sublists"
    ? subListElement.setAttribute("class", "show-sublists")
    : subListElement.setAttribute("class", "sublists");

  btnExpander.className === "btnToggle"
    ? btnExpander.setAttribute("class", "expander")
    : btnExpander.setAttribute("class", "btnToggle");
}
