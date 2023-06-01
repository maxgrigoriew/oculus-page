const tabItems = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");
const navBtn = document.querySelector(".nav-btn");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const menuLink = document.querySelectorAll(".menu__link");

const open = (e) => {
  const tabTarget = e.currentTarget;
  const button = tabTarget.dataset.button;

  tabItems.forEach((item, index) => {
    item.classList.remove("tabs__btn-item--active");
  });

  tabContent.forEach((item, index) => {
    item.classList.remove("tabs__content-item--active");
  });

  tabTarget.classList.add("tabs__btn-item--active");
  document
    .querySelector(`#${button}`)
    .classList.add("tabs__content-item--active");
};

tabItems.forEach((item) => {
  item.addEventListener("click", open);
});

navBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  navBtn.classList.toggle("active");
  body.classList.toggle("active");
});

menuLink.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active')
  })
})