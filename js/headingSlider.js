export const movieSliders = () => {
  const movieSlidersData = [
    {
      id: 1,
      page: "Фильмы",
      title: "Фильмы похожие на Большой куш",
      img: "./images/sliders/slider-3.jfif",
      kinopoisk: "8.5",
      imdbRate: "7.5",
    },
    {
      id: 2,
      page: "Фильмы",
      title: "Фильмы похожие на Большой куш",
      img: "./images/sliders/slider-3.jpg",
      kinopoisk: "8.5",
      imdbRate: "9.5",
    },
    {
      id: 3,
      page: "Фильмы",
      title: "Фильмы похожие на Большой куш",
      img: "./images/sliders/slider-2.jpg",
      kinopoisk: "8.5",
      imdbRate: "7.5",
    },
    {
      id: 4,
      page: "Фильмы",
      title: "Фильмы похожие на Большой куш",
      img: "./images/sliders/slider-3.jpg",
      kinopoisk: "8.5",
      imdbRate: "9.5",
    },
  ];

  const selectionMoviesSlidersData = [
    {
      id: 1,
      page: "Подборки",
      title: "Лучшие фильмы всех времен",
      img: "./images/sliders/slider-4.jpg",
      kinopoisk: "8.5",
      imdbRate: "7.5",
    },
    {
      id: 2,
      page: "Подборки",
      title: "Лучшие фильмы всех времен",
      img: "./images/sliders/slider-5.jpeg",
      kinopoisk: "8.5",
      imdbRate: "9.5",
    },
    {
      id: 3,
      page: "Подборки",
      title: "Лучшие фильмы всех времен",
      img: "./images/sliders/slider-6.jpg",
      kinopoisk: "8.5",
      imdbRate: "7.5",
    },
    {
      id: 4,
      page: "Подборки",
      title: "Лучшие фильмы всех времен",
      img: "./images/sliders/slider-5.jpeg",
      kinopoisk: "8.5",
      imdbRate: "9.5",
    },
  ];

  const movieSliderParent = document.querySelector(".heading__sliders");

  createHeadingSlider(
    movieSlidersData,
    selectionMoviesSlidersData,
    movieSliderParent
  );

 
};

const createHeadingSlider = (
  movieSliderData,
  selectionSliderData,
  sliderParent
) => {
  
  if(!sliderParent) return;

  if (sliderParent.dataset.slider === "movies") {
    // TODO MOVIE PAGE SLIDER
    const newSliderItem = movieSliderData
      .map(({ page, title, img, kinopoisk, imdbRate }) => {
        return `
			<div class="heading__sliders-item">

				<img class="heading__sliders-img" src="${img}" alt="${title}">
					<div class="heading__sliders-breadCrumbs">
						<div class="heading__sliders-breadCrumbs_item">
						<a
							class="heading__sliders-breadCrumbs_link regular-text"
							href="./index.html"
							>Главная /</a
						>
						</div>
						<div class="heading__sliders-breadCrumbs_item">
						<a
							class="heading__sliders-breadCrumbs_link regular-text"
							href="#!"
						>
							${page} /</a
						>
						</div>
						<div class="heading__sliders-breadCrumbs_item">
						<span class="heading__sliders-breadCrumbs_text regular-text"
							>${title}</span
						>
						</div>
					</div>

					<h1 class="heading__sliders-title">
					${title}
					</h1>

					<div class="heading__sliders-rate">
						<div class="heading__sliders-rate_info">
						<p class="heading__sliders-rate_num">${kinopoisk}</p>
						<p class="heading__sliders-rate_stars">
							оценка
							<img src="./images/icons/stars.svg" alt="stars" />
						</p>
						</div>
						<p class="heading__sliders-rate_imdb">
						Рейтинг IMDb: <span>${imdbRate}</span>
						</p>
					</div>
			</div>
		 `;
      })
      .join("");
    // !CHECKING IF THERE IS THIS CLASS, UNLESS RETURN
    if (sliderParent) {
      sliderParent.innerHTML = newSliderItem;
    } else {
      return;
    }
    // TODO SELECTION PAGE SLIDER
  } else if (sliderParent.dataset.slider === "selections") {
    const newSliderItem = selectionSliderData
      .map(({ page, title, img, kinopoisk, imdbRate }) => {
        return `
    <div class="heading__sliders-item">

      <img class="heading__sliders-img" src="${img}" alt="${title}">
        <div class="heading__sliders-breadCrumbs">
          <div class="heading__sliders-breadCrumbs_item">
          <a
            class="heading__sliders-breadCrumbs_link regular-text"
            href="./index.html"
            >Главная /</a
          >
          </div>
          <div class="heading__sliders-breadCrumbs_item">
          <a
            class="heading__sliders-breadCrumbs_link regular-text"
            href="#!"
          >
            ${page} /</a
          >
          </div>
          <div class="heading__sliders-breadCrumbs_item">
          <span class="heading__sliders-breadCrumbs_text regular-text"
            >${title}</span
          >
          </div>
        </div>

        <h1 class="heading__sliders-title">
        ${title}
        </h1>

        <div class="heading__sliders-rate">
          <div class="heading__sliders-rate_info">
          <p class="heading__sliders-rate_num">${kinopoisk}</p>
          <p class="heading__sliders-rate_stars">
            оценка
            <img src="./images/icons/stars.svg" alt="stars" />
          </p>
          </div>
          <p class="heading__sliders-rate_imdb">
          Рейтинг IMDb: <span>${imdbRate}</span>
          </p>
        </div>
    </div>
   `;
      })
      .join("");
    // !CHECKING IF THERE IS THIS CLASS, UNLESS RETURN
    if (sliderParent) {
      sliderParent.innerHTML = newSliderItem;
    } else {
      return;
    }
  } else {
    return;
  }

};
