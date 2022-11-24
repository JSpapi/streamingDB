// !import navbar js
import { activeAdaptiveNavbar, activeAdaptiveSearchbar } from "./navbar.js";

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
import { movieSliders } from "./headingSlider.js";

// !import content slider js
import { contentSlider } from "./contentSlider.js";

// !import film  js
import { film } from "./films.js";

// !import videoplayer js
import { createFilmPlayer } from "./videoPlayer.js";

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
// !CONTENT SLIDER
$(document).ready(function () {
  $(".contentSlider__sliders").slick({
    dots: false,
    autoplay: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});
// !CONTENT SLIDER END
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

  // !FILM CARD
  film();

  // !FILM PLAYER
  createFilmPlayer();
  // !CONTENT SLIDER
  contentSlider();
};

triggerAllFunctions();
