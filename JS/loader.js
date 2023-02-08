"use strict";

//////////////////////////
//////// LOADER  /////////
//////////////////////////

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  const list = document.querySelector(".nav-bar");

  loader.classList.add("loader-hidden");
  list.classList.add("nav-bar--animation");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(document.body.lastChild);
  });
});
