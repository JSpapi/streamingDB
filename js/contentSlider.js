export const contentSlider = () => {
  const bestFilms = [
    {
      id: 1,
      img: "./images/films/film-1.jpg",
      name: "Механик",
      info: "2020, Драма, США",
      kinopoiskRate: "7",
      imdbRate: "8",
    },
    {
      id: 2,
      img: "./images/films/film-2.jpg",
      name: "Шан-Чи и легенда десяти колец",
      info: "2020, Драма, США",
      kinopoiskRate: "6.5",
      imdbRate: "7.4",
    },
    {
      id: 3,
      img: "./images/films/film-3.jpg",
      name: "Гениальное ограбление",
      info: "2020, Драма, США",
      kinopoiskRate: "4.8",
      imdbRate: "4.7",
    },
    {
      id: 4,
      img: "./images/films/film-4.jpg",
      name: "Главный Герой",
      info: "2020, Драма, США",
      kinopoiskRate: "8",
      imdbRate: "7.8",
    },
    {
      id: 5,
      img: "./images/films/film-8.jpg",
      name: "Паразиты",
      info: "2020, Драма, США",
      kinopoiskRate: "8",
      imdbRate: "7.8",
    },
  ];
  const newFilms = [
    {
      id: 1,
      img: "./images/films/film-5.jpg",
      name: "Мужские Слезы",
      info: "2020, Драма, США",
      kinopoiskRate: "7",
      imdbRate: "8",
    },
    {
      id: 2,
      img: "./images/films/film-6.jpeg",
      name: "Хороший, Плохой, Злой",
      info: "2020, Драма, США",
      kinopoiskRate: "9",
      imdbRate: "8.9",
    },
    {
      id: 3,
      img: "./images/films/film-7.jpg",
      name: "ходячие мертвецы",
      info: "2020, Драма, США",
      kinopoiskRate: "4.8",
      imdbRate: "4.7",
    },
    {
      id: 4,
      img: "./images/films/film-8.jpg",
      name: "Паразиты",
      info: "2020, Драма, США",
      kinopoiskRate: "8",
      imdbRate: "7.8",
    },
    {
      id: 5,
      img: "./images/films/film-4.jpg",
      name: "Главный Герой",
      info: "2020, Драма, США",
      kinopoiskRate: "8",
      imdbRate: "7.8",
    },
  ];

  const contentSliderParent = document.querySelectorAll(
    ".contentSlider__sliders"
  );

  createContentSlider(contentSliderParent, bestFilms, newFilms);
};

const createContentSlider = (contentSliderParent, bestFilms, newFilms) => {
  contentSliderParent.forEach((contentSlider) => {
    if (contentSlider.dataset.film === "best-film") {
      const newBestFilms = bestFilms
        .map(({ id, img, name, info, kinopoiskRate, imdbRate }) => {
          return `
				<div class="contentSlider__sliders-item" id="${id}">
					<div class="contentSlider__sliders-img">
						<a class="contentSlider__sliders-imgLink" href="#!">
							<img class="slider-img" src="${img}" alt="${name}" />

							<div class="play__movie">
								<div class="play__movie-contentSmall">
								<img src="./images/icons/playBtn.svg" alt="">
								<p>Смотреть</p>
								</div>
							</div>

							<div
								class="contentSlider__sliders-filmRate kinopoisk-rate"
							>
								<a class="rate-source" href="#!">
								<img src="./images/icons/kinopoisk.svg" alt="" />
								<span>${kinopoiskRate}</span>
								</a>
							</div>
							<div class="contentSlider__sliders-filmRate imdb-rate">
								<a class="rate-source" href="#!">
								<img src="./images/icons/imdb.svg" alt="" />
								<span>${imdbRate}</span>
								</a>
							</div>
						</a>
					</div>

					<p class="slider-title">${name}</p>
					<p class="slider-subtitle">${info}</p>
			 	</div>
				`;
        })
        .join("");

      contentSlider.innerHTML = newBestFilms;
    } else {
      const createLatesFilms = newFilms
        .map(({ id, img, name, info, kinopoiskRate, imdbRate }) => {
          return `
				<div class="contentSlider__sliders-item" id="${id}">
				<div class="contentSlider__sliders-img">
					<a class="contentSlider__sliders-imgLink" href="#!">
						<img class="slider-img" src="${img}" alt="${name}" />

						<div class="play__movie">
							<div class="play__movie-contentSmall">
							<img src="./images/icons/playBtn.svg" alt="">
							<p>Смотреть</p>
							</div>
						</div>

						<div
							class="contentSlider__sliders-filmRate kinopoisk-rate"
						>
							<a class="rate-source" href="#!">
							<img src="./images/icons/kinopoisk.svg" alt="" />
							<span>${kinopoiskRate}</span>
							</a>
						</div>
						<div class="contentSlider__sliders-filmRate imdb-rate">
							<a class="rate-source" href="#!">
							<img src="./images/icons/imdb.svg" alt="" />
							<span>${imdbRate}</span>
							</a>
						</div>
					</a>
				</div>

				<p class="slider-title">${name}</p>
				<p class="slider-subtitle">${info}</p>
			 </div>
				`;
        })
        .join("");
      contentSlider.innerHTML = createLatesFilms;
    }
  });
};
