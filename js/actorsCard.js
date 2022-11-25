export const actorsCards = () => {
  const ACTORS_DATA_URL = "https://ramazanmovie.uz/api/v1/actors/";

  const populerActorsParent = document.querySelector(
    ".popular__actors-content"
  );

  createActorsCard(ACTORS_DATA_URL, populerActorsParent);
};

const createActorsCard = async ( ACTORS_DATA_URL, populerActorsParent,) => {

  const data = await fetch(ACTORS_DATA_URL);
  const actorsCard = await data.json();
  try {
	if(data.ok){
		const newActorsCard = actorsCard.map(({image, name}) => {
			return `
				<article class="popular__actors-item">
					<a  class="popular__actors-img" href="#!">
					<img class="movies-img" src="${image}" alt="">
					</a>
					<p class="popular__actors-name fontBold18">${name}</p>
				</article>
			`;
		}).join('');

		populerActorsParent.innerHTML = newActorsCard;
	  }else{
		throw new Error('Данные не существуют')
	  }
  } catch (err) {
		alert(err)
  }
  
};

