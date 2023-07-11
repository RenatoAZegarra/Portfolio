var header = document.querySelector("header");
window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", window.scrollY>100);
});

var menu = document.querySelector("#menu-icon");
var navlist = document.querySelector(".navlist");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
}
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
}

let navItem = document.querySelectorAll('ul li a');

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector('.active').classList.remove('active')
    item.classList.add('active')
  });
});