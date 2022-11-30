const filmContainer = document.querySelector(".film__container");
const mainVideo = document.querySelector(".film__video");
const progressBar = document.querySelector(".progress-bar");
const currentFilmTime = document.querySelector(".current-time");
const filmDuration = document.querySelector(".film-duration");
const filmTimeline = document.querySelector(".film__timeline");
const volumeBtn = document.querySelector(".volume i");
const volumeSlider = document.querySelector(".left input");
const skipBackward = document.querySelector(".skip-backward i");
const skipForward = document.querySelector(".skip-forward i");
const playPauseBtn = document.querySelector(".play-pause i");
const speedBtn = document.querySelector(".playback-speed span");
const speedOptions = document.querySelector(".speed-options");
const picinPicBtn = document.querySelector(".pic-in-pic span");
const fullscreenBtn = document.querySelector(".fullscreen i");
const playPauseFilm = [playPauseBtn, mainVideo];
let timer;

//TODO !FORMATING CURRENT TIME NAD DURATION OF FILM TO SHOW FOR USER
const formatTime = (time) => {
  let getSeconds = Math.floor(time % 60),
    getMinutes = Math.floor(time / 60) % 60,
    getHours = Math.floor(time / 3600);

  let seconds = getSeconds < 10 ? `0${getSeconds}` : getSeconds;
  let minutes = getMinutes < 10 ? `0${getMinutes}` : getMinutes;
  let hours = getHours < 10 ? `0${getHours}` : getHours;

  if (hours == 0) {
    return `${minutes}:${seconds}`;
  }

  return `${hours}:${minutes}:${seconds}`;
};

const dragableProgressBar = (e) => {
  let timelineWidth = filmTimeline.clientWidth;
  progressBar.style.width = `${e.offsetX}px`;
  mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
  currentFilmTime.innerText = formatTime(mainVideo.currentTime);
};

//TODO !ACTIVE FILM PLAYER AFTER CHOOSING FILM

export const createFilmPlayer = () => {
  if(!filmContainer) return;

  //TODO !HIDE CONTROLS
  const hideControls = () => {
    timer = setTimeout(() => {
      filmContainer.classList.remove("show-controls");
    }, 2000);
  };
  
  hideControls();

  filmContainer.addEventListener("mousemove", () => {
    filmContainer.classList.add("show-controls");
    clearTimeout(timer);
    hideControls();
  });

  // !VIDEO TIME CHOOSE BTN
  filmTimeline.addEventListener("click", (e) => {
    let timelineWidth = e.target.clientWidth;
    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
  });

  // !UPDATE TIME OF THE VIDEO
  mainVideo.addEventListener("timeupdate", (e) => {
    let { currentTime, duration } = e.target;
    let precent = (currentTime / duration) * 100;

    progressBar.style.width = `${precent}%`;
    currentFilmTime.innerText = formatTime(currentTime);
  });

  mainVideo.addEventListener("click", (e) => {
    filmDuration.innerText = formatTime(e.target.duration);
  });

  filmTimeline.addEventListener("mousedown", () => {
    filmTimeline.addEventListener("mousemove", dragableProgressBar);
  });

  document.addEventListener("mouseup", () => {
    filmTimeline.removeEventListener("mousemove", dragableProgressBar);
  });

  filmTimeline.addEventListener("mousemove", (e) => {
    const progressTime = filmTimeline.querySelector("span");
    let offsetX = e.offsetX;
    progressTime.style.left = `${offsetX}px`;
    let timelineWidth = filmTimeline.clientWidth;
    let percent = (e.offsetX / timelineWidth) * mainVideo.duration;
    progressTime.innerText = formatTime(percent);
  });

  // !LEFT SIDE OF VIDEO

  // !MUTE OR UNMUTE BTN
  volumeBtn.addEventListener("click", () => {
    if (!volumeBtn.classList.contains("fa-volume-high")) {
      mainVideo.volume = 0.5;
      volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    } else {
      mainVideo.volume = 0.0;
      volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    }

    volumeSlider.value = mainVideo.volume;
  });

  volumeSlider.addEventListener("input", (e) => {
    mainVideo.volume = e.target.value;
    if (e.target.value == 0) {
      volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    } else {
      volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    }
  });
  // !LEFT SIDE OF VIDEO END

  // !CENTER SIDE OF VIDEO

  // !MAKE PAUSE OR PLAY FILM

  playPauseFilm.forEach((btn) => {
    btn.addEventListener("click", () => {
      mainVideo.paused ? mainVideo.play() : mainVideo.pause();
    });
  });

  mainVideo.addEventListener("play", () => {
    playPauseBtn.classList.replace("fa-play", "fa-pause");
  });

  mainVideo.addEventListener("pause", () => {
    playPauseBtn.classList.replace("fa-pause", "fa-play");
  });

  // !5 SECOND BACKWARD
  skipBackward.addEventListener("click", () => {
    mainVideo.currentTime -= 5;
  });

  window.addEventListener("keydown", (e) => {
    if (e.keyCode === 37 && mainVideo.played.length !== 0)
      mainVideo.currentTime -= 5;
  });

  // !5 SECOND FORWARD
  skipForward.addEventListener("click", () => {
    mainVideo.currentTime += 5;
  });

  window.addEventListener("keydown", (e) => {
    if (e.keyCode === 39 && mainVideo.played.length !== 0)
      mainVideo.currentTime += 5;
  });
  // !CENTER SIDE OF VIDEO END
  // !RIGHT SIDE OF VIDEO

  // !CHANGE THE SPEED
  speedBtn.addEventListener("click", () => {
    speedOptions.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (
      e.target.tagName !== "SPAN" ||
      e.target.className !== "material-symbols-rounded"
    ) {
      speedOptions.classList.remove("show");
    }
  });

  speedOptions.querySelectorAll("li").forEach((option) => {
    option.addEventListener("click", () => {
      mainVideo.playbackRate = option.dataset.speed;

      speedOptions.querySelector(".active").classList.remove("active");
      option.classList.add("active");
    });
  });

  // !PICTURE IN PICTURE AND FULLSCREEN BTN
  picinPicBtn.addEventListener("click", () => {
    mainVideo.requestPictureInPicture();
  });

  fullscreenBtn.addEventListener("click", () => {
    filmContainer.classList.toggle("fullscreen");
    if (document.fullscreenElement) {
      fullscreenBtn.classList.replace("fa-compress", "fa-expand");
      return document.exitFullscreen();
    }
    fullscreenBtn.classList.replace("fa-expand", "fa-compress");
    filmContainer.requestFullscreen();
  });

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 70) {
      filmContainer.classList.toggle("fullscreen");
      if (document.fullscreenElement) {
        fullscreenBtn.classList.replace("fa-compress", "fa-expand");
        return document.exitFullscreen();
      }
      fullscreenBtn.classList.replace("fa-expand", "fa-compress");
      filmContainer.requestFullscreen();
    }
  });
  // !RIGHT SIDE OF VIDEO END
};




