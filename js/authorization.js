const signUpOpenBtns = document.querySelector("[data-signUp-target]");
const logInOpenBtns = document.querySelector("[data-LogIn-target]");
const popUpCloseBtns = document.querySelectorAll("[data-popUp-close]");
const overlay = document.querySelector("#overlay");

// !AUTHORIZATION POP UP
export const createSignUpFuctional = () => {
  //   !POP UP OPEN
  signUpOpenBtns.addEventListener("click", () => {
    const popUp = document.querySelector(signUpOpenBtns.dataset.signupTarget);
    popUpOpen(popUp, overlay);
  });

  //   !POP UP CLOSE

  popUpCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const popUp = btn.closest(".authorization-popup");
      popUpClose(popUp);
    });
  });

  // !OVERLAY CLOSE
  closeOverlay();
};

// !AUTHORIZATION POP UP END

// !LOG IN POP UP
export const createLogInfunctional = () => {
  logInOpenBtns.addEventListener("click", () => {
    const popUp = document.querySelector(logInOpenBtns.dataset.loginTarget);
    popUpOpen(popUp, overlay);
  });
};
// !LOG IN POP UP END

// !OVERLAY CLOSE
const closeOverlay = () => {
  overlay.addEventListener("click", () => {
    const signUpForm = document.querySelector(
      signUpOpenBtns.dataset.signupTarget
    );
    const logInForm = document.querySelector(logInOpenBtns.dataset.loginTarget);

    if (signUpForm === null || logInForm === null) return;

    if (logInForm || signUpForm) {
      signUpForm.classList.remove("active");
      logInForm.classList.remove("active");
      overlay.classList.remove("active");
    }
  });
};
// !OVERLAY CLOSE END

//   !POP UP OPEN
const popUpOpen = (popUp, overlay) => {
  if (popUp === null) return;
  popUp.classList.add("active");
  overlay.classList.add("active");
};

//   !POP UP CLOSE
const popUpClose = (popUp) => {
  if (popUp === null) return;
  popUp.classList.remove("active");
  overlay.classList.remove("active");
};

// !POST REGISTRATION FORM TO BACKEND
export const userRegistration = () => {
  const registration = document.getElementById("signUp");

  const userName = document.getElementById("name");
  const userEmail = document.getElementById("email");
  const userPassword = document.getElementById("password");
  const userConfirmPassword = document.getElementById("confirmPassword");

  userEmail.innerText;
  registration.addEventListener("submit", (e) => {
    e.preventDefault();

    validateRegistration(
      userName,
      userEmail,
      userPassword,
      userConfirmPassword
    );
  });

  // const check = localStorage.getItem('user');
  // const getUser = JSON.parse(check)
  // console.log(getUser.token);
};

const validateRegistration = async (
  userName,
  userEmail,
  userPassword,
  userConfirmPassword
) => {
  const userNameValue = userName.value.trim();
  const userEmailValue = userEmail.value.trim();
  const userPasswordValue = userPassword.value.trim();
  const userConfirmPasswordValue = userConfirmPassword.value.trim();
  const registrUrl = "https://ramazanmovie.uz/api/v1/register/";
  const popUp = userEmail.closest(".authorization-popup");

  if (userConfirmPasswordValue === userPasswordValue) {
    const userRegistrData = {
      email: userEmailValue,
      password: userPasswordValue,
    };

    try {
      const response = await fetch(registrUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userRegistrData),
      });

      const registrRespons = await response.json();

      if (response.ok) {
        alert("Вы успешно создали аккаунт");
        popUpClose(popUp);
        // userName.innerText = '';
        // userEmail.innerText = '';
        // userPassword.innerText = '';
        // userConfirmPassword.innerText = '';
        // const newUser = {
        //   id: registrRespons.user.id,
        //   email: registrRespons.user.email,
        //   token: registrRespons.token,
        // };
        // localStorage.setItem("user", JSON.stringify   (newUser));
      } else {
        throw new Error(registrRespons.email);
      }
    } catch (error) {
      alert(error);
    }
  } else {
    alert("Повторите пароль правильно");
  }
  userName.value = "";
  userEmail.value = "";
  userPassword.value = "";
  userConfirmPassword.value = "";
};

export const logIn = () => {
  const loginBtn = document.getElementById("logIn");
  const userEmail = document.getElementById("loginEmail");
  // const userName = document.getElementById("loginName");
  const userPassword = document.getElementById("loginPassword");

  loginBtn.addEventListener("submit", (e) => {
    e.preventDefault();

    getLoginData(userEmail, userPassword);
  });
};

const getLoginData = async (userName, userPassword) => {
  const userEmailValue = userName.value.trim();
  const userPasswordValue = userPassword.value.trim();
  const popUp = userName.closest(".authorization-popup");
  console.log(popUp);

  const loginUrl = "https://ramazanmovie.uz/api/v1/login/";

  const loginData = {
    username: userEmailValue,
    password: userPasswordValue,
  };
  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const loginRespons = await response.json();

    if (response.ok) {
      alert("Вы успешно вошли в свой аккаунт");

      popUpClose(popUp);

    } else {
      // throw new Error(sData2.email);
      throw new Error("Неправильный Email или пароль");
    }
  } catch (error) {
    alert(error);
  }

  userName.value = "";
  userPassword.value = "";
};
