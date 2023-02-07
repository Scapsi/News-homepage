const navigation = document.querySelector("nav");
const openMenuBtn = document.querySelector("nav .open-menu");
const menu = document.querySelector("nav .menu");
const closeMenuBtn = document.querySelector("nav .menu .close-menu");

openMenuBtn.onclick = function () {
  navigation.classList.add("blur");
  menu.classList.add("open");
};
closeMenuBtn.onclick = function () {
  navigation.classList.remove("blur");
  menu.classList.remove("open");
};