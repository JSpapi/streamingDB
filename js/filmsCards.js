export const similarFilmCards = ()=> {
	const similarFilmsData = [
		{
			img: './images/films/film-9.jpg',
			name: 'Интерстеллар',
			info: '2020, Драма, США',
		},
		{
			img: './images/films/film-10.jpg',
			name: 'Довод',
			info: '2020, Драма, США',
		},
		{
			img: './images/films/film-11.jpg',
			name: '1 + 1',
			info: '2020, Драма, США',
		},
		{
			img: './images/films/film-12.jpeg',
			name: 'Гладиатор',
			info: '2020, Драма, США',
		},
		{
			img: './images/films/film-13.jpg',
			name: 'Унесённые призраками',
			info: '2020, Драма, США',
		},
		{
			img: './images/films/film-14.jpg',
			name: 'бойцовский клуб',
			info: '2020, Драма, США',
		},
		{
			img: './images/films/film-15.jpg',
			name: 'джанго освобождённый',
			info: '2020, Драма, США',
		},
		{
			img: './images/films/film-16.jpg',
			name: 'пираты карибского моря: проклятие чёрной жемчужины',
			info: '2020, Драма, США',
		},
	];

	const similarFilmsParent = document.querySelector('.similar__movies-content');
	createSimilarFilmsItem(similarFilmsData, similarFilmsParent)
};

const createSimilarFilmsItem = (similarFilmsData, similarFilmsParent)=> {
	const newSimilarFilms = similarFilmsData.map(({img, name, info}) => {
		return `
			<article class="similar__movies-item">
				<a class="similar__movies-img" href="#!">
				<img class="movies-img" src="${img}" alt="${name}">

				<div class="play__movie">
					<div class="play__movie-contentSmall">
					<img src="./images/icons/playBtn.svg" alt="">
					<p>Смотреть</p>
					</div>
				</div>
				</a>
				<p class="slider-title">${name}</p>
				<p class="slider-subtitle">${info}</p>
			</article>
		`;
	}).join('');

	similarFilmsParent.innerHTML = newSimilarFilms;
}