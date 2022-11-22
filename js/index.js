// !import navbar js
import {
  activeAdaptiveNavbar,
  activeAdaptiveSearchbar,
} from "./navbar.js";

// !import genre and sidebar js
import { genre } from "./genre.js";
import { newCollections } from "./sidebar.js";
// !import registration js
import {
  createSignUpFuctional,
  createLogInfunctional,
  userRegistration,
  logIn,
} from "./authorization.js";

// !import header slider js
import {movieSliders} from './headingSlider.js';

// !import film  js
import {film} from './films.js';
// !import videoplayer js
import {createFilmPlayer} from './videoPlayer.js';

// !SLIDERS START
$(document).ready(function () {
  $(".popular__collection-slider").slick({
    dots: true,
    autoplay: true,
  });
});


// !HEADING SLIDER
$(document).ready(function () {
  $(".heading__sliders").slick({
    dots: true,
    autoplay: true,
  });
});
// !HEADING SLIDER END
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

  // disableAllBtns();

  // !CREATE GENRE FICTION
  genre();

  // !sidebar
  newCollections();

  // !SIGN UP
  createSignUpFuctional();
  // !LOG IN
  createLogInfunctional();

  userRegistration();
  logIn();
  // !HEADING SLIDER
  movieSliders();

  film();

  createFilmPlayer();
};

triggerAllFunctions();
