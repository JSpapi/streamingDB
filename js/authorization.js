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

  registration.addEventListener("submit", (e) => {
    e.preventDefault();

    validateRegistration(
      userName,
      userEmail,
      userPassword,
      userConfirmPassword
    );
  });
};

const validateRegistration = async (
  userName,
  userEmail,
  userPassword,
  userConfirmPassword
) => {
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

// !POST LOGIN FORM TO BACKEND
export const logIn = () => {
  const loginBtn = document.getElementById("logIn");
  const userEmail = document.getElementById("loginEmail");
  const userPassword = document.getElementById("loginPassword");

  loginBtn.addEventListener("submit", (e) => {
    e.preventDefault();

    getLoginData(userEmail, userPassword);

    setTimeout(() => {
      location.reload();
    }, 5000);
  });
  isUserLogIN();
};

// !CHECK USER LOG IN OR NOT
function isUserLogIN() {
  // !NICK NAME OF USER
  const signUp = document.querySelector("[data-signUp-target]");
  const logIn = document.querySelector("[data-LogIn-target]");
  const logInParent = document.querySelector(".signUp-logIn");

  const userNick = document.createElement("p");
  const logOut = document.createElement("p");

  userNick.classList.add("userNick");
  logOut.classList.add("logOut");

  if (localStorage.key("user")) {
    const { id, email } = JSON.parse(localStorage.getItem("user")) || [];

    logOut.innerText = "| Выйти";
    userNick.innerText = email;

    if (userNick.innerText === "") {
      logInParent.replaceChild(signUp, userNick);
      logInParent.replaceChild(logIn, logOut);
    } else {
      logInParent.replaceChild(userNick, signUp);
      logInParent.replaceChild(logOut, logIn);
    }
  } else {
    return;
  }
}

const getLoginData = async (userEmail, userPassword) => {
  const userEmailValue = userEmail.value.trim();
  const userPasswordValue = userPassword.value.trim();
  const popUp = userEmail.closest(".authorization-popup");

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

    const { user, token } = await response.json();

    if (response.ok) {
      alert("Вы успешно вошли в свой аккаунт");
      localStorage.setItem("user", JSON.stringify(user));

      popUpClose(popUp);
      isUserLogIN();
    } else {
      console.log(response);
      throw new Error("Неправильный Email или пароль");
    }
  } catch (error) {
    alert(error);
  }

  userEmail.value = "";
  userPassword.value = "";
};

// !POST LOGOUT FORM TO BACKEND

export const logOut = () => {
  const logOutBtn = document.querySelector(".logOut");
  if (!logOutBtn) return;

  logOutBtn.addEventListener("click", () => {
    getLogOutData();
    alert("Вы успешно вышли из своего аккаунта");
    location.reload();
  });
};

const getLogOutData = () => {
  localStorage.clear();
  isUserLogIN();
};
