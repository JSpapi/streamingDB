// !import navbar js
import { activeAdaptiveNavbar, activeAdaptiveSearchbar } from "./navbar.js";

// !import genre and sidebar js
import { genre } from "./genre.js";

import { newCollections } from "./sidebar.js";
// !import registration
import {
  createSignUpFuctional,
  createLogInfunctional,
  userRegistration,
  logIn,
  logOut,
} from "./authorization.js";


// !import header slider
import { movieSliders } from "./headingSlider.js";

// !import content slider
import { similarFilmCards, selectionFilmCards } from "./filmsCards.js"
import {actorsCards  } from "./actorsCard.js"

// !import FILM cards to chose film
import { contentSlider } from "./contentSlider.js";

// !import film to watch
import { film } from "./films.js";

// !import videoplayer
import { createFilmPlayer } from "./videoPlayer.js";

// !SLIDERS START
// TODO SIDEBAR SLIDER
$(document).ready(function () {
  $(".popular__collection-slider").slick({
    dots: true,
    autoplay: true,
  });
});
// TODO SIDEBAR SLIDER END

// TODO HEADING SLIDER
$(document).ready(function () {
  $(".heading__sliders").slick({
    dots: true,
    autoplay: true,
  });
});
// TODO HEADING SLIDER END

// TODO CONTENT SLIDER
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
// TODO CONTENT SLIDER END
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
  logOut();
  // !HEADING SLIDER
  movieSliders();

  // !FILM TO WATCH
  film();

  // !FILM PLAYER
  createFilmPlayer();
  // !CONTENT SLIDER
  contentSlider();

  // !FILM CARDS TO CHOSE
  similarFilmCards();
  // !FILM CARDS TO CHOSE
  selectionFilmCards();
   // !ACTORS CARDS
  actorsCards();
};

triggerAllFunctions();

