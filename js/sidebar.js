export const newCollections = () => {
  const newCollectionsData = [
    {
      id: 1,
      time: "2 недели назад",
      img: "./images/films/sidebarImg-1.png",
      description: "Задача организации, в особенности же новая формировании.",
    },
    {
      id: 2,
      time: "3 недели назад",
      img: "./images/films/sidebarImg-2.png",
      description: "Задача организации, в особенности же новая формировании.",
    },
    {
      id: 3,
      time: "1 неделю назад",
      img: "./images/films/sidebarImg-3.png",
      description: "Задача организации, в особенности же новая формировании.",
    },
    {
      id: 4,
      time: "2 дня назад",
      img: "./images/films/sidebarImg-4.png",
      description: "Задача организации, в особенности же новая формировании.",
    },
    {
      id: 5,
      time: "1 месяц назад",
      img: "./images/films/sidebarImg-5.png",
      description: "Задача организации, в особенности же новая формировании.",
    },
  ];

  const newCollectionParrent = document.querySelector(
    ".new__collection-movies"
  );

  createNewCollectionMovies(newCollectionsData, newCollectionParrent);
};

const createNewCollectionMovies = (
  newCollectionsData,
  newCollectionParrent
) => {
  const createNewCollection = newCollectionsData
    .map(({ img, description, id, time }) => {
      return `
			<div class="new__collection-movie">
				<a href="../movie.html" class="new__collection-img">
					<img src="${img}" alt="sidebar-${id}" />
				</a>
				<div class="new__collection-content">
					<p class="new__collection-time">
						<img src="./images/icons/clock.svg" alt="clock" />
						${time}
					</p>

					<a class="new__collection-description" href="../movie.html">
						${description}
					</a>
				</div>
			</div>
		`;
    })
    .join("");
  // !CHECKING IF THERE IS THIS CLASS, UNLESS RETURN
  if (newCollectionParrent) {
    if (newCollectionParrent) {
      newCollectionParrent.innerHTML = createNewCollection;
    } else {
      return;
    }
  } else {
    return;
  }
};
