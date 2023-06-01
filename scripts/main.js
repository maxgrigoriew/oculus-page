const tabItems = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");
const navBtn = document.querySelector(".nav-btn");
const menu = document.querySelector(".menu");

navBtn.addEventListener('click', () => {
  menu.classList.toggle('active')
})

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
