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

  const movieSliderParent = document.querySelector(".heading__sliders");

  createHeadingSlider(movieSlidersData, movieSliderParent);
};

const createHeadingSlider = (sliderData, sliderParent) => {
  const newSliderItem = sliderData
    .map(({ page, title, img, kinopoisk, imdbRate }) => {
      return `
			<div class="heading__sliders-item">

				<img class="heading__sliders-img" src="${img}" alt="">
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
  sliderParent.innerHTML = newSliderItem;
};
