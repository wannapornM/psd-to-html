function showDropdown(element) {
  child = document.getElementById(element.id).childNodes[3];
  child.style.visibility = "visible";
}

function hideDropdown(element) {
  child = document.getElementById(element.id).childNodes[3];
  child.style.visibility = "hidden";
}
