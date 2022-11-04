// !AUTHORIZATION POP UP

export const createSignUpFuctional = () => {
  const popUpOpenBtns = document.querySelector("[data-signUp-target]");
  const popUpCloseBtns = document.querySelectorAll("[data-popUp-close]");
  const overlay = document.querySelector("#overlay");
  console.log(popUpOpenBtns);

  //   !POP UP OPEN
  popUpOpenBtns.addEventListener("click", () => {
    const signUpForm = document.querySelector(
      popUpOpenBtns.dataset.signupTarget
    );
    popUpOpen(signUpForm, overlay);
  });

  //   !POP UP CLOSE

  popUpCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const signUpForm = btn.closest(".authorization-popup");
      popUpClose(signUpForm);
    });
  });

  // !OVERLAY CLOSE
  overlay.addEventListener("click", () => {
    const signUpForm = document.querySelector(
      popUpOpenBtns.dataset.signupTarget
    );
    signUpForm.classList.remove("active");
    overlay.classList.remove("active");
  });
};

//   !POP UP OPEN
const popUpOpen = (signUpForm, overlay) => {
  if (signUpForm === null) return;
  signUpForm.classList.add("active");
  overlay.classList.add("active");
};

//   !POP UP CLOSE
const popUpClose = (signUpForm) => {
  if (signUpForm === null) return;
  signUpForm.classList.remove("active");
  overlay.classList.remove("active");
};

// !AUTHORIZATION POP UP END
