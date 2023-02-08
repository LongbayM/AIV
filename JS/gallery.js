("use strict");

/////////////////////////
//// MODAL PICTURES ////
/////////////////////////

const tabsContainer = document.querySelector(".operations__gallery-row1");
const tabsContainer2 = document.querySelector(".operations__gallery-row2");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");

// View modal
const modalView = function (e) {
  const markup = `
  <img
  class="img-modal img-modal--1"
  id="modal"
  alt="#"
  src="/img pakattu/${e}.jpg"
  onContextMenu="return false;"
  />`;
  modal.insertAdjacentHTML("afterbegin", markup);
};

// Open modal row1
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".gallery-img--container");
  if (!clicked) return;
  modalView(clicked.dataset.tab);
  modal.classList.remove("hidden");
});

// Open modal row2
tabsContainer2.addEventListener("click", function (e) {
  const clicked = e.target.closest(".gallery-img--container");
  if (!clicked) return;
  modalView(clicked.dataset.tab);
  modal.classList.remove("hidden");
});

// Close Modal
btnCloseModal.addEventListener("click", function () {
  const modalEl = document.getElementById("modal");
  modal.classList.add("hidden");
  modalEl.remove();
});

// Close Modal ESC key
document.addEventListener("keydown", (e) => {
  const modalEl = document.getElementById("modal");
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    modalEl.remove();
  }
});

/////////////////////////
// LAZY LOADING IMGS //
/////////////////////////

const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));
