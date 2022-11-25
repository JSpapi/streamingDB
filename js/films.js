export const film = () => {
  const filmParent = document.querySelector(".movie");
  getFilmData(filmParent);
};

const getFilmData = async (filmParent) => {
  const FILM_URL = "https://ramazanmovie.uz/api/v1/movie/";

  try {
    const data = await fetch(FILM_URL);
    const response = await data.json();
    if (data.ok) {
      const movieCard = response
        .map(({ title, poster, file, year, country, world_premiere }) => {
          return `
			<div class="movie__card">
				<div class="movie__card-left">
					<div class="movie__card-left_img">
						<img src="${poster}" alt="" />

						<div class="play__movie">
							<div class="play__movie-content">
							<img src="./images/icons/playBtn.svg" alt="" />
							<p>Смотреть</p>
							</div>
						</div>
					</div>

					<div class="movie__card-left_score">
						<a
							class="movie__card-left_score_circle kinopoisk"
							href="https://www.kinopoisk.ru/film/1236795/"
							target="_blank"
						>
							<p class="movie__card-left_score_textBold">8.9</p>
							<p class="movie__card-left_score_text">Кинопоиск</p>
						</a>
						<a
							class="movie__card-left_score_circle imdb"
							href="https://www.imdb.com/title/tt9742794/?ref_=nv_sr_srsg_0"
							target="_blank"
						>
							<p class="movie__card-left_score_textBold">8</p>
							<p class="movie__card-left_score_text">IMDb</p>
						</a>
					</div>

					<a class="movie__card-left_trailer" href="#!">
						<div class="movie__card-left_trailer_img">
							<img
							class="trailer_img"
							src="./images/films/trailer.jpg"
							alt=""
							/>

							<div class="movie__card-left_trailer_play">
							<div class="play__movie-contentSmall">
								<img src="./images/icons/playBtn.svg" alt="" />
								<p>Смотреть трейлер</p>
							</div>
							</div>
						</div>
					</a>
				</div>
				<div class="movie__card-right">
				<div class="movie__card-right_title">
					<h2 class="movie__card-right_name section-title">
						${title}
					</h2>
					<h2 class="movie__card-right_originalName">Hacksaw Ridge</h2>
				</div>
				<div class="movie__card-right_techSpecs">
					<div class="movie__card-right_techSpecs_content">
						<div class="movie__card-right_techSpecs_title">
						Продолжительность
						</div>
						<div
						class="movie__card-right_techSpecs_text regular-text"
						>
						1 Час 58 минут
						</div>
					</div>
					<div class="movie__card-right_techSpecs_content">
						<div class="movie__card-right_techSpecs_title">
						Год выпуска
						</div>
						<div
						class="movie__card-right_techSpecs_text regular-text"
						>
						${year}
						</div>
					</div>
					<div class="movie__card-right_techSpecs_content">
						<div class="movie__card-right_techSpecs_title">
						Премьера фильма в России
						</div>
						<div
						class="movie__card-right_techSpecs_text regular-text"
						>
						${world_premiere}
						</div>
					</div>
					<div class="movie__card-right_techSpecs_content">
						<div class="movie__card-right_techSpecs_title">
						Возраст
						</div>
						<div
						class="movie__card-right_techSpecs_text regular-text"
						>
						18+
						</div>
					</div>
				</div>

				<div class="movie__card-right_details">
					<ul class="movie__card-right_details_list">
						<li class="movie__card-right_details_item">
						<span>Жанр</span>
						<a
							class="regular-text movie__card-right_details_link"
							href="#!"
							>Боевик,</a
						>
						<a
							class="regular-text movie__card-right_details_link"
							href="#!"
							>Комедия,</a
						>
						<a
							class="regular-text movie__card-right_details_link"
							href="#!"
							>Драма</a
						>
						</li>
						<li class="movie__card-right_details_item">
						<span>Страна</span>
						<a
							class="regular-text movie__card-right_details_link"
							href="#!"
							>${country}</a
						>
						</li>
						<li class="movie__card-right_details_item">
						<span>В главных ролях</span>
						<a
							class="regular-text movie__card-right_details_link"
							href="#!"
							>Адам Уэст,</a
						>
						<a
							class="regular-text movie__card-right_details_link"
							href="#!"
						>
							Берт Уорд,</a
						>
						<a
							class="regular-text movie__card-right_details_link"
							href="#!"
						>
							Уильям Шетнер</a
						>
						</li>
						<li class="movie__card-right_details_item">
						<span>Участвует в подборках</span>
						<a
							class="regular-text movie__card-right_details_link"
							href="#!"
							>${year}</a
						>
						<a
							class="regular-text movie__card-right_details_link"
							href="#!"
							>Нетфликс</a
						>
						<a
							class="regular-text movie__card-right_details_link"
							href="#!"
							>Вестерны</a
						>
						<a
							class="regular-text movie__card-right_details_link"
							href="#!"
							>Аниме</a
						>
						<a
							class="regular-text movie__card-right_details_link"
							href="#!"
							>Лучшие фильмы 2021</a
						>
						</li>
					</ul>
				</div>
				<div class="movie__card-right_about">
					<h3 class="movie__card-right_about_title slider-title">
						О чем фильм “${title}”
					</h3>
					<p class="movie__card-right_about_text regular-text">
						Идейные соображения высшего порядка, а также сложившаяся
						структура организации требуют от нас анализа направлений
						прогрессивного развития. Равным образом постоянное
						информационно-пропагандистское обеспечение нашей
						деятельности влечет за собой процесс внедрения и
						модернизации направлений прогрессивного развития.
					</p>
					<p class="movie__card-right_about_text regular-text">
						Идейные соображения высшего порядка, а Постоянный
						количественный рост и сфера нашей активности представляет
						собой интересный эксперимент проверки систем массового
						участия.
					</p>

					<div class="movie__card-right_more">
						<a class="regular-text" href="#!">Еще</a>
					</div>
				</div>
				<div class="movie__card-right_casts">
					<div class="movie__card-right_casts_content">
						<p class="movie__card-right_casts_title">Режиссер</p>
						<div class="movie__card-right_casts_b">
						<a class="movie__card-right_casts_person" href="#!">
							<img src="./images/acters/acter-1.png" alt="acter" />
							<span class="regular-text">Гай Ричи</span>
						</a>
						<div class="movie__card-right_casts_films">
							<a class="movie__card-right_casts_film" href="#!">
								<p>
								<span>8.7</span> Джентльмены <span>2020</span>
								</p>
							</a>
							<a class="movie__card-right_casts_film" href="#!">
								<p>
								<span>8.5</span> Шерлок Холмс <span>2009</span>
								</p>
							</a>
						</div>
						</div>
					</div>
					<div class="movie__card-right_casts_content">
						<p class="movie__card-right_casts_title">В ролях</p>
						<div class="movie__card-right_casts_b">
						<a class="movie__card-right_casts_person" href="#!">
							<img src="./images/acters/acter-2.png" alt="acter" />
							<span class="regular-text">Джейсон Стэтхэм</span>
						</a>
						<a class="movie__card-right_casts_person" href="#!">
							<img src="./images/acters/acter-3.png" alt="acter" />
							<span class="regular-text">Рози Хантингтон</span>
						</a>
						<a class="movie__card-right_casts_person" href="#!">
							<img src="./images/acters/acter-4.png" alt="acter" />
							<span class="regular-text">Брюс Уиллис</span>
						</a>
						<a class="movie__card-right_casts_person" href="#!">
							<img src="./images/acters/acter-5.png" alt="acter" />
							<span class="regular-text">Шон Бин</span>
						</a>
						<a class="movie__card-right_casts_person" href="#!">
							<img src="./images/acters/acter-6.png" alt="acter" />
							<span class="regular-text">Джони Депп</span>
						</a>
						<a class="movie__card-right_casts_person" href="#!">
							<img src="./images/acters/acter-7.png" alt="acter" />
							<span class="regular-text">Кира Найтли</span>
						</a>
						<a class="movie__card-right_casts_person" href="#!">
							<img src="./images/acters/acter-8.png" alt="acter" />
							<span class="regular-text">Том Круз</span>
						</a>
						</div>
					</div>
					<div class="movie__card-right_more">
						<a class="regular-text" href="#!"
						>Все актеры и съемочная группа</a
						>
					</div>
				</div>
				</div>
		 </div>
			
			`;
        })
        .join("");

      filmParent.innerHTML = movieCard;

      // !SHOW OR HIDE VIDEOPLAYER

      const filmPlayerOverlay = document.querySelector(".player-overlay");
      const filmPlayer = document.querySelector(".filmPlayer");
      const filmPlayerShowBtn = document.querySelector(".movie__card-left_img");
      const mainVideo = document.querySelector(".film__video");

      filmPlayerShowBtn.addEventListener("click", () => {
        filmPlayer.classList.add("active");
        filmPlayerOverlay.classList.add("active");
      });

      filmPlayerOverlay.addEventListener("click", () => {
        filmPlayer.classList.remove("active");
        filmPlayerOverlay.classList.remove("active");
        mainVideo.pause();
      });
    } else {
		
    }
  } catch (error) {
    alert("sorry... thechnical problems with server");
  }
};
