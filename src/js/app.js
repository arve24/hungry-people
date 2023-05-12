import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const nav = document.querySelector(".header__button");
const body = document.body;

nav.addEventListener("click", () => {
  body.classList.toggle("_lock");
});

import "./modules/datepicker.js";

import "./modules/tabs.js";

import "./modules/slider.js";

import "./modules/gallery.js";

import "./modules/inputmask.js";

import "./modules/validate.js";
