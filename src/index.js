// // let home = document.getElementById("home");
// let homeListmenus = document.getElementById("home-listmenus");
// home.addEventListener("mouseover", () => {
//   homeListmenus.style.visibility = "visible";
// });
// home.addEventListener("mouseleave", () => {
//   homeListmenus.style.visibility = "hidden";
// });

function show_dropdown(element) {
  // console.log(parent.id);
  child = document.getElementById(element.id).childNodes[3];
  child.style.visibility = "visible";
}
function hide_dropdown(element) {
  child = document.getElementById(element.id).childNodes[3];
  child.style.visibility = "hidden";
}
