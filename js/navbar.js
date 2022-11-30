// !navbar burger function
export const activeAdaptiveNavbar = () => {
  const NavbarOpenBtn = document.querySelector(".navbar-burger");
  const NavbarCloseBtn = document.querySelector(".adaptive-header__close");
  const adaptiveNavbar = document.querySelector(".adaptive-navbar");
  const navbar = NavbarOpenBtn.closest(".navbar");

  NavbarOpenBtn.addEventListener("click", () => {
    adaptiveNavbar.classList.add("active");
    navbar.style.display = "none";
  });

  NavbarCloseBtn.addEventListener("click", () => {
    adaptiveNavbar.classList.remove("active");
    navbar.style.display = "flex";
  });
};

// !navbar burger functions end

// todo // !navbar search function
export const activeAdaptiveSearchbar = () => {
  const SearchbarBtn = document.querySelector(".navbar-search__btn");
  const adaptiveSearchbar = document.querySelector(".adaptive-searchbar");
  const NavbarCloseBtn = document.querySelectorAll(".adaptive-header__close");
  const navbar = SearchbarBtn.closest(".navbar");

  SearchbarBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (screen.width <= 1024) {
      adaptiveSearchbar.classList.add("active");
      navbar.style.display = "none";
    }
  });

  NavbarCloseBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      adaptiveSearchbar.classList.remove("active");
      navbar.style.display = "flex";
    });
  });
};

// todo // !navbar search function end
