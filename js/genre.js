// !FUNCTION THAT CREATES GENRE
export const genre = () => {
  const genreData = [
    {
      img: "./images/genre/action.png",
      title: "Боевики",
      amount: 453,
    },
    {
      img: "./images/genre/military.png",
      title: "Военные",
      amount: 358,
    },
    {
      img: "./images/genre/detective.png",
      title: "Детективы",
      amount: 342,
    },
    {
      img: "./images/genre/forChildren.png",
      title: "Детские",
      amount: 298,
    },
    {
      img: "./images/genre/drama.png",
      title: "Драмы",
      amount: 286,
    },
    {
      img: "./images/genre/comedy.png",
      title: "Комедии",
      amount: 265,
    },
    {
      img: "./images/genre//criminal.png",
      title: "Криминалы",
      amount: 198,
    },
    {
      img: "./images/genre/melodrama.png",
      title: "Мелодрамы",
      amount: 165,
    },
    {
      img: "./images/genre/triller.png",
      title: "Триллеры",
      amount: 147,
    },
    {
      img: "./images/genre/horror.png",
      title: "Ужасы",
      amount: 138,
    },
    {
      img: "./images/genre/fantastic.png",
      title: "Фантастика",
      amount: 124,
    },
    {
      img: "./images/genre/fantazy.png",
      title: "Фэнтези",
      amount: 112,
    },
  ];

  const genreParent = document.querySelector(".content__genre");

  createCards(genreData, genreParent);

  genreParent.innerHTML;
};

const createCards = (genreData, genreParent) => {
  const newGeners = genreData
    .map(({ img, title, amount }) => {
      if (amount > 400) {
        return `
      <a href="#!" class="genre__films grid-span-6">
        <img src="${img}" alt="${title}" />

        <div class="genre__films-info">
          <h3 class="genre__films-title">${title}</h3>
          <p class="genre__films-amount">
            Подборок: <span>${amount}</span>
          </p>
        </div>
      </a>
    `;
      } else if (amount < 400 && amount > 300) {
        return `
        <a href="#!" class="genre__films grid-span-3">
          <img src="${img}" alt="${title}" />

          <div class="genre__films-info">
            <h3 class="genre__films-title">${title}</h3>
            <p class="genre__films-amount">
              Подборок: <span>${amount}</span>
            </p>
          </div>
        </a>
      `;
      } else {
        return `
        <a href="#!" class="genre__films grid-span-2">
          <img src="${img}" alt="${title}" />

          <div class="genre__films-info">
            <h3 class="genre__films-title">${title}</h3>
            <p class="genre__films-amount">Подборок: <span>${amount}</span></p>
          </div>
        </a>
      `;
      }
    })
    .join("");

  genreParent.innerHTML = newGeners;
};

// !FUNCTION THAT CREATES GENRE END
