import {
  disableAllBtns,
  activeAdaptiveNavbar,
  activeAdaptiveSearchbar,
} from "./navbar.js";

import { genre } from "./genre.js";
import { newCollections } from "./sidebar.js";
import { createSignUpFuctional } from "./authorization.js";
// !SLIDERS START
$(document).ready(function () {
  $(".popular__collection-slider").slick({
    dots: true,
    // autoplay: true,
  });
});

// !SLIDERS END

// !PRELOADER
window.addEventListener("load", () => {
  preloaderFn();
});

const preloaderFn = () => {
  const preloader = document.querySelector(".preloader");
  const body = preloader.closest("body");
  body.removeAttribute("id");
  preloader.classList.add("disappear");
};

// !PRELOADER END

const triggerAllFunctions = () => {
  activeAdaptiveNavbar();

  activeAdaptiveSearchbar();

  disableAllBtns();

  // !CREATE GENRE FICTION
  genre();

  // !sidebar
  newCollections();

  // !SIGN UP
  createSignUpFuctional();
};

triggerAllFunctions();
