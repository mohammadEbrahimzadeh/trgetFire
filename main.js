let elm = document.querySelector(".reticle");
let elm2 = document.querySelector(".reticleCircle");
let elm2P = document.querySelector(".reticleCircleElmp");
let siblSelect = document.querySelector("#siblSelect");
let kalibrSelect = document.querySelector("#kalibrSelect");
let reticleCircleElmp = document.querySelector(".reticleCircleElmp");
let divImg = document.querySelector(".divImg");
let imgSibl = document.querySelector(".imgSibl");
var elm2After = window.getComputedStyle(elm2P, "::after");
let mediaquery = window.matchMedia("(max-width: 450px)");
let finalResualtTimedelay;
let finalResualtDrift;
let differenceCM;
let finalResualtAngle = 0;
let PercentageAngle = 100;
let cancadValueDrift;
let PercentageDrift = 50;
let InputA = document.getElementById("v1");
let InputAvalueGolobal;
let InputB = document.getElementById("v2");
let InputBvalueGolobal;
let InputC = document.getElementById("m");
let InputCvalueGolobal;
let driftInput = document.getElementById("driftInput");
let PercentageDriftForStepsArray = [];
window.addEventListener("contextmenu", (e) => e.preventDefault());
window.addEventListener("load", () => {
  differenceCM = localStorage.getItem("differenceCM");
  finalAngle = localStorage.getItem("finalAngle");
  differenceCM = parseFloat(differenceCM);
  finalAngle = parseFloat(finalAngle);

  differenceCM *= 0.32;
  finalAngle = localStorage.getItem("finalAngle");
  finalAngle -= 180;

  if (window.screen.width >= 251) {
    elm.style.left = `-15% `;
    elm.style.top = `50vh `;
  }
  if (window.screen.width >= 500) {
    elm.style.left = `13% `;
    elm.style.top = `50vh `;
  }
  if (window.screen.width >= 800) {
    elm.style.left = `50% `;
    elm.style.top = `50vh `;
  }
});

const img = document.querySelector(".reticle");
let moveInimg = false;
img.ondragstart = () => {
  return false;
};
divImg.ondragstart = () => {
  return false;
};

elm.ondragstart = () => {
  return false;
};
window.addEventListener("click", (e) => {
  elm2.style.display = "flex";
  elm2.style.left = `calc(${e.pageX - 6}px  `;
  elm2.style.top = `calc(${e.pageY - 70}px `;
});
divImg.addEventListener("mousemove", (e) => {
  moveInimg = true;
});
divImg.addEventListener("mouseleave", (event) => {
  moveInimg = false;
});

window.addEventListener("mousemove", (e) => {
  elm.style.left = `calc(${e.pageX - 200}px`;
  elm.style.top = `calc(${e.pageY - 118}px `;
  // -------
  // digramCodes
  const info = document.querySelector(".info");
  const box = circleRange.getBoundingClientRect();
  const { atan2, PI, round } = Math;

  let centerX;
  let centerY;
  let deltaX;
  let deltaY;
  let posX;
  let posY;
  let angle = 0;

  if (isDragging) {
    centerX = circleRange.offsetWidth / 2 + box.left;
    centerY = circleRange.offsetHeight / 2 + box.top;
    posX = e.pageX;
    posY = e.pageY;

    deltaY = centerY - posY;
    deltaX = centerX - posX;
    angle = atan2(deltaY, deltaX) * (180 / PI);
    angle -= 90;
    if (angle < 0) angle += 360;
    angle = round(angle);
    topElmP.style.transform = `rotate(${angle}deg)`;
    bottomElmP.style.transform = `rotate(${angle}deg)`;
    iconElm.style.transform = `rotate(${angle}deg)`;
    info.textContent = angle;
    if (angle == 0) {
      plusDeg = 0;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = PercentageAngle + 100;
    }
    if (angle <= 7.5 && angle > 0) {
      plusDeg = 1.25;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }

    if (angle <= 15 && angle > 7.5) {
      plusDeg = 2.5;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 22.5 && angle > 15) {
      plusDeg = 3.75;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 30 && angle > 22.5) {
      plusDeg = 5;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 37.5 && angle > 30) {
      plusDeg = 6.25;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 45 && angle > 37.5) {
      plusDeg = 7.5;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 52.5 && angle > 45) {
      plusDeg = 8.75;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 60 && angle > 52.5) {
      plusDeg = 10;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 67.5 && angle > 60) {
      plusDeg = 11.25;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 75 && angle > 67.5) {
      plusDeg = 12.5;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 82.5 && angle > 75) {
      plusDeg = 13.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 90 && angle > 82.5) {
      plusDeg = 15;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 97.5 && angle > 90) {
      plusDeg = 13.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 90) / 90) * 100;
    }

    if (angle <= 105 && angle > 97.5) {
      plusDeg = 12.5;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 90) / 90) * 100;
    }
    if (angle <= 112.5 && angle > 105) {
      plusDeg = 11.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 90) / 90) * 100;
    }
    if (angle <= 120 && angle > 112.5) {
      plusDeg = 10;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 90) / 90) * 100;
    }
    if (angle <= 127.5 && angle > 120) {
      plusDeg = 8.75;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 90) / 90) * 100;
    }
    if (angle <= 135 && angle > 127.5) {
      plusDeg = 7.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 90) / 90) * 100;
    }
    if (angle <= 142.5 && angle > 135) {
      plusDeg = 6.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 90) / 90) * 100;
    }
    if (angle <= 150 && angle > 142.5) {
      plusDeg = 5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 90) / 90) * 100;
    }

    if (angle <= 157.5 && angle > 150) {
      plusDeg = 3.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 90) / 90) * 100;
    }
    if (angle <= 165 && angle > 157.5) {
      plusDeg = 2.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 90) / 90) * 100;
    }
    if (angle <= 172.5 && angle > 165) {
      plusDeg = 1.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 90) / 90) * 100;
    }
    if (angle <= 180 && angle > 172.5) {
      plusDeg = 0;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 90) / 90) * 100;
    }
    if (angle <= 187.5 && angle > 180) {
      plusDeg = 1.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 195 && angle > 187.5) {
      plusDeg = 2.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 202.5 && angle > 195) {
      plusDeg = 3.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 210 && angle > 202.5) {
      plusDeg = 5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 217.5 && angle > 210) {
      plusDeg = 6.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 225 && angle > 217.5) {
      plusDeg = 7.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 232.5 && angle > 225) {
      plusDeg = 8.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 240 && angle > 232.5) {
      plusDeg = 10;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 247.5 && angle > 240) {
      plusDeg = 11.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 255 && angle > 247.5) {
      plusDeg = 12.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 262.5 && angle > 255) {
      plusDeg = 13.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 270 && angle > 262.5) {
      plusDeg = 15;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 277.5 && angle > 270) {
      plusDeg = 13.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;

      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 285 && angle > 277.5) {
      plusDeg = 12.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;

      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 292.5 && angle > 285) {
      plusDeg = 11.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;

      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 300 && angle > 292.5) {
      plusDeg = 10;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;

      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 307.5 && angle > 300) {
      plusDeg = 8.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;

      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 315 && angle > 307.5) {
      plusDeg = 7.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;

      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 322.5 && angle > 315) {
      plusDeg = 6.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;

      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 330 && angle > 322.5) {
      plusDeg = 5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;

      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 337.5 && angle > 330) {
      plusDeg = 3.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;

      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 345 && angle > 337.5) {
      plusDeg = 2.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;

      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 352.5 && angle > 345) {
      plusDeg = 1.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;

      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 360 && angle > 352.5) {
      plusDeg = 0;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;

      PercentageAngle = PercentageAngle - 100;
    }
    finalResualtAngle = angle - plusDeg;
    PercentageDrift = PercentageAngle / 2;
    retecaleresponsev();
    let reticleCircleElmpHeight = reticleCircleElmp.style.height;
    reticleCircleElmpHeight = reticleCircleElmpHeight.replace("cm", "");
    reticleCircleElmpHeight = Number(reticleCircleElmpHeight);
    cancadValueDrift = (reticleCircleElmpHeight * PercentageDrift) / 100;
    cancadValueDrift = reticleCircleElmpHeight - cancadValueDrift;
    reticleCircleElmp.style.height = `${cancadValueDrift}cm`;
    reticleCircleElmp.style.rotate = `${finalResualtAngle - 180}deg`;
  }
});
// ------------------------
document.addEventListener("touchmove", (e) => {
  for (let i = 0; i < e.changedTouches.length; i++) {
    let pagex = e.changedTouches[i].pageX;
    let pagey = e.changedTouches[i].pageY;

    elm.style.left = `calc(${pagex - 200}px `;
    elm.style.top = `calc(${pagey - 160}px  `;
  }
  // -------------
  // digram codes
  const info = document.querySelector(".info");
  const box = circleRange.getBoundingClientRect();
  const { atan2, PI, round } = Math;
  let angle;
  let centerX;
  let centerY;
  let deltaX;
  let deltaY;
  let posX;
  let posY;

  if (isDragging) {
    centerX = circleRange.offsetWidth / 2 + box.left;
    centerY = circleRange.offsetHeight / 2 + box.top;

    for (let i = 0; i < e.changedTouches.length; i++) {
      posX = e.changedTouches[i].pageX;
      posY = e.changedTouches[i].pageY;
    }
    deltaY = centerY - posY;
    deltaX = centerX - posX;
    angle = atan2(deltaY, deltaX) * (180 / PI);
    angle -= 90;
    if (angle < 0) angle += 360;
    angle = round(angle);
    topElmP.style.transform = `rotate(${angle}deg)`;
    bottomElmP.style.transform = `rotate(${angle}deg)`;
    iconElm.style.transform = `rotate(${angle}deg)`;
    info.textContent = angle;
    if (angle == 0) {
      plusDeg = 0;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 7.5 && angle > 0) {
      plusDeg = 1.25;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }

    if (angle <= 15 && angle > 7.5) {
      plusDeg = 2.5;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 22.5 && angle > 15) {
      plusDeg = 3.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 30 && angle > 22.5) {
      plusDeg = 5;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 37.5 && angle > 30) {
      plusDeg = 6.25;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 45 && angle > 37.5) {
      plusDeg = 7.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 52.5 && angle > 45) {
      plusDeg = 8.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 60 && angle > 52.5) {
      plusDeg = 10;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 67.5 && angle > 60) {
      plusDeg = 11.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 75 && angle > 67.5) {
      plusDeg = 12.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 82.5 && angle > 75) {
      plusDeg = 13.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 90 && angle > 82.5) {
      plusDeg = 15;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 97.5 && angle > 90) {
      plusDeg = 13.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }

    if (angle <= 105 && angle > 97.5) {
      plusDeg = 12.5;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 112.5 && angle > 105) {
      plusDeg = 11.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 120 && angle > 112.5) {
      plusDeg = 10;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 127.5 && angle > 120) {
      plusDeg = 8.75;
      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 135 && angle > 127.5) {
      plusDeg = 7.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 142.5 && angle > 135) {
      plusDeg = 6.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 150 && angle > 142.5) {
      plusDeg = 5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }

    if (angle <= 157.5 && angle > 150) {
      plusDeg = 3.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 165 && angle > 157.5) {
      plusDeg = 2.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 172.5 && angle > 165) {
      plusDeg = 1.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 180 && angle > 172.5) {
      plusDeg = 0;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = (angle / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 187.5 && angle > 180) {
      plusDeg = 1.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 195 && angle > 187.5) {
      plusDeg = 2.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 202.5 && angle > 195) {
      plusDeg = 3.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 210 && angle > 202.5) {
      plusDeg = 5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 217.5 && angle > 210) {
      plusDeg = 6.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 225 && angle > 217.5) {
      plusDeg = 7.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 232.5 && angle > 225) {
      plusDeg = 8.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 240 && angle > 232.5) {
      plusDeg = 10;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 247.5 && angle > 240) {
      plusDeg = 11.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 255 && angle > 247.5) {
      plusDeg = 12.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 262.5 && angle > 255) {
      plusDeg = 13.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 270 && angle > 262.5) {
      plusDeg = 15;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = 100 - PercentageAngle;
    }
    if (angle <= 277.5 && angle > 270) {
      plusDeg = 13.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 285 && angle > 277.5) {
      plusDeg = 12.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 292.5 && angle > 285) {
      plusDeg = 11.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 300 && angle > 292.5) {
      plusDeg = 10;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 307.5 && angle > 300) {
      plusDeg = 8.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 315 && angle > 307.5) {
      plusDeg = 7.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 322.5 && angle > 315) {
      plusDeg = 6.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 330 && angle > 322.5) {
      plusDeg = 5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 337.5 && angle > 330) {
      plusDeg = 3.75;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 345 && angle > 337.5) {
      plusDeg = 2.5;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 352.5 && angle > 345) {
      plusDeg = 1.25;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    if (angle <= 360 && angle > 352.5) {
      plusDeg = 0;

      bottomElmP.style.transform = `rotate(${angle - plusDeg}deg)`;
      PercentageAngle = ((angle - 180) / 90) * 100;
      PercentageAngle = PercentageAngle - 100;
    }
    finalResualtAngle = angle - plusDeg;
    PercentageDrift = PercentageAngle / 2;
    retecaleresponsev();
    let reticleCircleElmpHeight = reticleCircleElmp.style.height;
    reticleCircleElmpHeight = reticleCircleElmpHeight.replace("cm", "");
    reticleCircleElmpHeight = Number(reticleCircleElmpHeight);
    cancadValueDrift = (reticleCircleElmpHeight * PercentageDrift) / 100;
    cancadValueDrift = reticleCircleElmpHeight - cancadValueDrift;
    reticleCircleElmp.style.height = `${cancadValueDrift}cm`;

    // digram codes
    // -------------
  }
});
window.addEventListener("touchend", (e) => {
  for (let i = 0; i < e.changedTouches.length; i++) {
    let pagexSm = e.changedTouches[i].pageX;
    let pageySm = e.changedTouches[i].pageY;

    elm2.style.left = `calc(${pagexSm - 6}px `;
    elm2.style.top = `calc(${pageySm - 115}px  `;
  }
});
// -------------------------------------------------------
// responsive target

function target4_25m() {
  if (window.screen.width >= 251) {
    elm2P.style.setProperty("--widthKlibrSize", "0.55cm");
    elm2P.style.setProperty("--heightKlibrSize", "0.55cm");
  }
  if (window.screen.width >= 300) {
    elm2P.style.setProperty("--widthKlibrSize", "0.66cm");
    elm2P.style.setProperty("--heightKlibrSize", "0.66cm");
  }
  if (window.screen.width >= 350) {
    elm2P.style.setProperty("--widthKlibrSize", "0.70cm");
    elm2P.style.setProperty("--heightKlibrSize", "0.70cm");
  }
  if (window.screen.width >= 400) {
    elm2P.style.setProperty("--widthKlibrSize", "0.70cm");
    elm2P.style.setProperty("--heightKlibrSize", "0.70cm");
  }
  if (window.screen.width >= 450) {
    elm2P.style.setProperty("--widthKlibrSize", "0.75cm");
    elm2P.style.setProperty("--heightKlibrSize", "0.75cm");
  }
  if (window.screen.width >= 500) {
    elm2P.style.setProperty("--widthKlibrSize", "0.80cm");
    elm2P.style.setProperty("--heightKlibrSize", "0.80cm");
  }
  if (window.screen.width >= 550) {
    elm2P.style.setProperty("--widthKlibrSize", "0.80cm");
    elm2P.style.setProperty("--heightKlibrSize", "0.80cm");
  }
  if (window.screen.width >= 575) {
    elm2P.style.setProperty("--widthKlibrSize", "0.95cm");
    elm2P.style.setProperty("--heightKlibrSize", "0.95cm");
  }
  if (window.screen.width >= 650) {
    elm2P.style.setProperty("--widthKlibrSize", "1.0cm");
    elm2P.style.setProperty("--heightKlibrSize", "1.0cm");
  }
}
function target5_25m() {
  if (window.screen.width >= 251) {
    elm2P.style.setProperty("--widthKlibrSize", "0.8cm");
    elm2P.style.setProperty("--heightKlibrSize", "0.8cm");
  }
  if (window.screen.width >= 300) {
    elm2P.style.setProperty("--widthKlibrSize", "0.91cm");
    elm2P.style.setProperty("--heightKlibrSize", "0.91cm");
  }
  if (window.screen.width >= 350) {
    elm2P.style.setProperty("--widthKlibrSize", "1.0cm");
    elm2P.style.setProperty("--heightKlibrSize", "1.0cm");
  }
  if (window.screen.width >= 400) {
    elm2P.style.setProperty("--widthKlibrSize", "1.0cm");
    elm2P.style.setProperty("--heightKlibrSize", "1.0cm");
  }
  if (window.screen.width >= 450) {
    elm2P.style.setProperty("--widthKlibrSize", "1.0cm");
    elm2P.style.setProperty("--heightKlibrSize", "1.0cm");
  }
  if (window.screen.width >= 500) {
    elm2P.style.setProperty("--widthKlibrSize", "1.03cm");
    elm2P.style.setProperty("--heightKlibrSize", "1.03cm");
  }
  if (window.screen.width >= 550) {
    elm2P.style.setProperty("--widthKlibrSize", "1.03cm");
    elm2P.style.setProperty("--heightKlibrSize", "1.03cm");
  }
  if (window.screen.width >= 575) {
    elm2P.style.setProperty("--widthKlibrSize", "1.07cm");
    elm2P.style.setProperty("--heightKlibrSize", "1.07cm");
  }
  if (window.screen.width >= 650) {
    elm2P.style.setProperty("--widthKlibrSize", "1.2cm");
    elm2P.style.setProperty("--heightKlibrSize", "1.2cm");
  }
}

// responsive target
// -------------------------------------------------------

siblSelect.addEventListener("change", (e) => {
  if (e.target.value == "25m") {
    imgSibl.src = "./img/25m.png";
    if (kalibrSelect.value == "4.5") {
      target4_25m();
    }
    if (kalibrSelect.value == "5.5") {
      target5_25m();
    }
  }
  if (e.target.value == "50m") {
    imgSibl.src = "./img/50m Airgun (IRBR).png";
    if (kalibrSelect.value == "4.5") {
      target4_25m();
    }
    if (kalibrSelect.value == "5.5") {
      target5_25m();
    }
  }
  if (e.target.value == "75y") {
    imgSibl.src = "./img/50m Rimfire.png";
    if (kalibrSelect.value == "4.5") {
      target4_25m();
    }
    if (kalibrSelect.value == "5.5") {
      target5_25m();
    }
  }
  if (e.target.value == "75y") {
    imgSibl.src = "./img/50m Rimfire.png";
    if (kalibrSelect.value == "4.5") {
      target4_25m();
    }
    if (kalibrSelect.value == "5.5") {
      target5_25m();
    }
  }
  if (e.target.value == "100y") {
    imgSibl.src = "./img/75&100yard.png";
    if (kalibrSelect.value == "4.5") {
      target4_25m();
    }
    if (kalibrSelect.value == "5.5") {
      target5_25m();
    }
  }
});
function myFunction(mediaquery) {
  if (mediaquery.matches) {
    // If media query matches
    elm2P.style.setProperty("--widthSize", "2vw");
    elm2P.style.setProperty("--heightSize", "2vw");
  } else {
    elm2P.style.setProperty("--widthSize", "1vw");
    elm2P.style.setProperty("--heightSize", "1vw");
  }
}

function myFunction2(mediaquery) {
  if (mediaquery.matches) {
    // If media query matches
    elm2P.style.setProperty("--widthSize", "2vw");
    elm2P.style.setProperty("--heightSize", "2vw");
  } else {
    elm2P.style.setProperty("--widthSize", "1vw");
    elm2P.style.setProperty("--heightSize", "1vw");
  }
}

kalibrSelect.addEventListener("change", (e) => {
  if (e.target.value == "4.5") {
    elm2P.style.display = "flex";
    elm2P.style.setProperty("--color", "red");
    myFunction(mediaquery); // Call listener function at run time
    mediaquery.addListener(myFunction);
    target4_25m();
  }
  if (e.target.value == "5.5") {
    elm2P.style.display = "flex";

    elm2P.style.setProperty("--color", "red");
    myFunction2(mediaquery); // Call listener function at run time
    mediaquery.addListener(myFunction2);
    target5_25m();
  }
});
// ----------------------
// timedelay codes
function calcute() {
  var A = Number(document.getElementById("v1").value);
  var B = Number(document.getElementById("v2").value);
  var C = Number(document.getElementById("m").value);

  var D = C / A;
  var E = C / ((A + B) / 2);

  let finalResualt = E - D;
  finalResualtTimedelay = finalResualt;
  let finalResualtToFixed;
  finalResualtToFixed = finalResualt
    .toString()
    .match(/^-?\d+(?:\.\d{0,3})?/)[0];
  // finalResualt = toFixed(3);
  document.getElementById("elementresulttimedelay").innerHTML =
    finalResualtToFixed + "&nbsp" + " m/s";
  driftresultElm.innerHTML = "نتیجه";
  reticleCircleElmp.style.height = "0cm";
}

InputA.addEventListener("keyup", () => {
  calcute();
  labalePercentageDriftForSteps.forEach((item) => {
    item.innerHTML = "نتیجه";
  });
});
InputB.addEventListener("keyup", () => {
  calcute();
  labalePercentageDriftForSteps.forEach((item) => {
    item.innerHTML = "نتیجه";
  });
});
InputC.addEventListener("keyup", () => {
  calcute();
  labalePercentageDriftForSteps.forEach((item) => {
    item.innerHTML = "نتیجه";
  });
});
InputA.addEventListener("focus", () => {
  driftInput.value = "";
});
InputB.addEventListener("focus", () => {
  driftInput.value = "";
});
InputC.addEventListener("focus", () => {
  driftInput.value = "";
});
let modalTimeDelay = document.querySelector(".modalTimeDelay");
let confirmation = document.getElementById("confirmation");
let showModalTimeDelay = document.getElementById("showModalTimeDelay");
confirmation.addEventListener("click", () => {
  modalTimeDelay.classList.add("d-none");
});
showModalTimeDelay.addEventListener("click", () => {
  modalTimeDelay.classList.remove("d-none");
});
// timedelay codes
// -------------------------
// drift codes
//retecaleresponsev
function retecaleresponsev() {
  if (window.screen.width >= 251) {
    reticleCircleElmp.style.height = `${finalResualtDrift * 0.75}cm`;
  }
  if (window.screen.width >= 300) {
    reticleCircleElmp.style.height = `${finalResualtDrift * 0.9}cm`;
  }
  if (window.screen.width >= 350) {
    reticleCircleElmp.style.height = `${finalResualtDrift * 0.95}cm`;
  }
  if (window.screen.width >= 400) {
    reticleCircleElmp.style.height = `${finalResualtDrift * 1}cm`;
  }
  if (window.screen.width >= 450) {
    reticleCircleElmp.style.height = `${finalResualtDrift * 0.95}cm`;
  }
  if (window.screen.width >= 500) {
    reticleCircleElmp.style.height = `${finalResualtDrift * 0.95}cm`;
  }
  if (window.screen.width >= 550) {
    reticleCircleElmp.style.height = `${finalResualtDrift * 0.95}cm`;
  }
  if (window.screen.width >= 573) {
    reticleCircleElmp.style.height = `${finalResualtDrift * 1.1}cm`;
  }
  if (window.screen.width >= 650) {
    reticleCircleElmp.style.height = `${finalResualtDrift * 1.3}cm`;
  }
  if (window.screen.width >= 773) {
    reticleCircleElmp.style.height = `${finalResualtDrift * 1.3}cm`;
  }
}

//retecaleresponsev
let showModalspeedWind = document.getElementById("showModalspeedWind");
let modalspeedWind = document.querySelector(".modalspeedWind");
let confirmationSpeedWind = document.getElementById("confirmationSpeedWind");

let driftresultElm = document.getElementById("driftresultElm");
let unitSelect = document.getElementById("unitSelect");
let uinitValueKMorMS;
let uinitValue;

confirmationSpeedWind.addEventListener("click", () => {
  modalspeedWind.classList.add("d-none");
  retecaleresponsev();
  let reticleCircleElmpHeight = reticleCircleElmp.style.height;
  reticleCircleElmpHeight = reticleCircleElmpHeight.replace("cm", "");
  reticleCircleElmpHeight = Number(reticleCircleElmpHeight);
  cancadValueDrift = (reticleCircleElmpHeight * PercentageDrift) / 100;
  cancadValueDrift = reticleCircleElmpHeight - cancadValueDrift;
  reticleCircleElmp.style.height = `${cancadValueDrift}cm`;
  reticleCircleElmp.style.rotate = `${finalResualtAngle - 180}deg`;
});
showModalspeedWind.addEventListener("click", () => {
  if (finalResualtTimedelay) {
    modalspeedWind.classList.remove("d-none");
  } else {
    alert("لطفا ابتدا سرعت ساچمه را حساب کنید");
  }
});
unitSelect.addEventListener("change", (e) => {
  let valueSelect = e.target.value;
  if (valueSelect == "kh") {
    uinitValue = 0.6213711922;
    driftInput.removeAttribute("disabled");
  }
  if (valueSelect == "ms") {
    uinitValue = 2.236936291;
    driftInput.removeAttribute("disabled");
  }
});
driftInput.addEventListener("keyup", (e) => {
  let inputValue = e.target.value;

  let unitkhOrMs = inputValue * uinitValue;

  let result = finalResualtTimedelay * unitkhOrMs * 17.6;
  result *= 2.54;

  finalResualtDrift = result;
  result = result.toString().match(/^-?\d+(?:\.\d{0,3})?/)[0];
  driftresultElm.innerHTML = result + " cm";
});
// drift codes

// ------------
// diagraFIre
let showModaldiagram = document.getElementById("showModaldiagram");
let modaldegree = document.querySelector(".modaldegree");
const circleRange = document.querySelector(".circle-range");
let isDragging;
const topElmP = document.querySelector(".topElmP");
const iconElm = document.querySelector(".icon");
const bottomElmP = document.querySelector(".bottomElmP");
circleRange.addEventListener("mousedown", () => {
  isDragging = true;
});
circleRange.addEventListener("touchstart", () => {
  isDragging = true;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});
// ----------
window.addEventListener("touchend", () => {
  isDragging = false;
});
let plusDeg = 0;
let confirmationDiagram = document.getElementById("confirmationDiagram");
confirmationDiagram.addEventListener("click", () => {
  if (finalResualtAngle || finalResualtAngle == 0) {
    retecaleresponsev();
    let reticleCircleElmpHeight = reticleCircleElmp.style.height;
    reticleCircleElmpHeight = reticleCircleElmpHeight.replace("cm", "");
    reticleCircleElmpHeight = Number(reticleCircleElmpHeight);
    cancadValueDrift = (reticleCircleElmpHeight * PercentageDrift) / 100;
    cancadValueDrift = reticleCircleElmpHeight - cancadValueDrift;
    reticleCircleElmp.style.height = `${cancadValueDrift}cm`;
    reticleCircleElmp.style.rotate = `${finalResualtAngle - 180}deg`;
    modaldegree.classList.add("d-none");
  } else {
    alert("لطفا جهت باد را مشخص کنید");
  }
});
showModaldiagram.addEventListener("click", () => {
  modaldegree.classList.remove("d-none");
});
// ------------------
let dropdowns = document.querySelector("#dropdownMenuLink");
let ulMainMenu = document.querySelector(".ulMainMenu");
let ulSubMenu = document.querySelectorAll(".ulSubMenu");
let liMenuitem = document.querySelectorAll(".liMenuitem");
dropdowns.addEventListener("click", function (e) {
  ulMainMenu.classList.toggle("d-none");
});
liMenuitem.forEach((elmLi) => {
  elmLi.addEventListener("click", function (e) {
    let ulSub = elmLi.children[1];

    ulSubMenu.forEach((elm) => {
      if (elm !== ulSub) {
        elm.classList.add("d-none");
      }
    });
    ulSub.classList.toggle("d-none");
  });
});
ulSubMenu.forEach((elm) => {
  let liSubArray = elm.querySelectorAll("li");
  liSubArray.forEach((item) => {
    item.addEventListener("click", (e) => {
      let idElm = item.id;
      idElm = Number(idElm);
      ulMainMenu.classList.add("d-none");
      finalResualtTimedelay = idElm;

      let finalResualtTimedelayToFixed = finalResualtTimedelay;
      finalResualtTimedelayToFixed = finalResualtTimedelayToFixed
        .toString()
        .match(/^-?\d+(?:\.\d{0,3})?/)[0];
      document.getElementById("elementresulttimedelay").innerHTML =
        finalResualtTimedelayToFixed + "&nbsp" + " m/s";
      InputA.value = "";
      InputB.value = "";
      InputC.value = "";
      driftInput.value = "";
      reticleCircleElmp.style.height = "0cm";
      driftresultElm.innerHTML = "نتيجه";
      autoCompleatInputs(item.id);
    });
  });
});
function autoCompleatInputs(id) {
  if (id == "0.006711289283413274") {
    InputA.value = "244";
    InputB.value = "214";
    InputC.value = "25";
  }
  if (id == "0.005128481969337073") {
    InputA.value = "220";
    InputB.value = "201";
    InputC.value = "25";
  }

  // ---------------
  if (id == "0.007037278256741997") {
    InputA.value = "314";
    InputB.value = "263";
    InputC.value = "25";
  }
  if (id == "0.0050817006320979935") {
    InputA.value = "284";
    InputB.value = "253";
    InputC.value = "25";
  }
  if (id == "0.004384133611691016") {
    InputA.value = "250";
    InputB.value = "229";
    InputC.value = "25";
  }
  // ---------------

  if (id == "0.017383714048999882") {
    InputA.value = "272";
    InputB.value = "225";
    InputC.value = "50";
  }
  if (id == "0.01774188097732418") {
    InputA.value = "254";
    InputB.value = "212";
    InputC.value = "50";
  }
  // ------------
  if (id == "0.017774392179267462") {
    InputA.value = "295";
    InputB.value = "239";
    InputC.value = "50";
  }
  if (id == "0.01366934211909851") {
    InputA.value = "277";
    InputB.value = "238";
    InputC.value = "50";
  }
  // 75----------
  if (id == "0.032042619542619555") {
    InputA.value = "296";
    InputB.value = "224";
    InputC.value = "68.5";
  }
  if (id == "0.032510292948588676") {
    InputA.value = "311";
    InputB.value = "231";
    InputC.value = "68.5";
  }
  if (id == "0.025688417443480105") {
    InputA.value = "306";
    InputB.value = "243";
    InputC.value = "68.5";
  }
  if (id == "0.023675115207373254") {
    InputA.value = "310";
    InputB.value = "250";
    InputC.value = "68.5";
  }
  if (id == "0.01326340528666714") {
    InputA.value = "281";
    InputB.value = "252";
    InputC.value = "68.5";
  }
  if (id == "0.013695720087472663") {
    InputA.value = "291";
    InputB.value = "259";
    InputC.value = "68.5";
  }
  if (id == "0.013952094414506705") {
    InputA.value = "302";
    InputB.value = "267";
    InputC.value = "68.5";
  }
  if (id == "0.01463675213675214") {
    InputA.value = "312";
    InputB.value = "273";
    InputC.value = "68.5";
  }
  if (id == "0.015220491727038765") {
    InputA.value = "322";
    InputB.value = "279";
    InputC.value = "68.5";
  }

  // -------- 100
  if (id == "0.05469547579388534") {
    InputA.value = "296";
    InputB.value = "207";
    InputC.value = "91.5";
  }
  if (id == "0.0543592099219109") {
    InputA.value = "311";
    InputB.value = "214";
    InputC.value = "91.5";
  }
  if (id == "0.0436770213703459") {
    InputA.value = "306";
    InputB.value = "228";
    InputC.value = "91.5";
  }
  if (id == "0.04123576850094879") {
    InputA.value = "310";
    InputB.value = "234";
    InputC.value = "91.5";
  }
  if (id == "0.022948652770716838") {
    InputA.value = "281";
    InputB.value = "244";
    InputC.value = "91.5";
  }
  if (id == "0.02382948720391792") {
    InputA.value = "291";
    InputB.value = "250";
    InputC.value = "91.5";
  }
  if (id == "0.02439017166415902") {
    InputA.value = "302";
    InputB.value = "257";
    InputC.value = "91.5";
  }
  if (id == "0.024991638795986593") {
    InputA.value = "312";
    InputB.value = "263";
    InputC.value = "91.5";
  }
  if (id == "0.025483179367531583") {
    InputA.value = "322";
    InputB.value = "269";
    InputC.value = "91.5";
  }
}
// ------------
let MinDivModalForFooter = document.getElementById("MinDivModalForFooter");
let BtnFooterShowModal = document.getElementById("BtnFooterShowModal");
let btnAppcetModalFooter = document.getElementById("btnAppcetModalFooter");
let steplabaleLine = document.querySelectorAll(".steplabaleLine");
let labalePercentageDriftForSteps = document.querySelectorAll(
  ".labalePercentageDriftForSteps"
);
BtnFooterShowModal.addEventListener("click", () => {
  let driftInputForSteps = driftInput.value;
  driftInputForSteps = Number(driftInputForSteps);
  if (typeof driftInputForSteps == "number" && driftInputForSteps !== 0) {
    MinDivModalForFooter.classList.remove("d-none");
    PercentageDriftForStepsArray = [];
    calcStepsWind();
    let sum = 0;
    for (const i in PercentageDriftForStepsArray) {
      sum += PercentageDriftForStepsArray[i];
    }
    PercentageDriftForStepsArray.forEach((item, i) => {
      let calcMainPercentForSteps = (item / sum) * 100 - 20;
      if (i == 0) {
        calcMainPercentForSteps = calcMainPercentForSteps + 6.666;
        calcMainPercentForSteps = Math.abs(calcMainPercentForSteps);
        let calcMainPercentForStepsTofixed = calcMainPercentForSteps
          .toString()
          .match(/^-?\d+(?:\.\d{0,2})?/)[0];

        labalePercentageDriftForSteps[
          i
        ].innerHTML = calcMainPercentForStepsTofixed;
      }
      if (i == 1) {
        calcMainPercentForSteps = calcMainPercentForSteps + 13.333;
        let calcMainPercentForStepsTofixed = calcMainPercentForSteps
          .toString()
          .match(/^-?\d+(?:\.\d{0,2})?/)[0];

        labalePercentageDriftForSteps[
          i
        ].innerHTML = calcMainPercentForStepsTofixed;
      }
      if (i == 2) {
        calcMainPercentForSteps = calcMainPercentForSteps + 20.0;
        let calcMainPercentForStepsTofixed = calcMainPercentForSteps
          .toString()
          .match(/^-?\d+(?:\.\d{0,2})?/)[0];

        labalePercentageDriftForSteps[
          i
        ].innerHTML = calcMainPercentForStepsTofixed;
      }
      if (i == 3) {
        calcMainPercentForSteps = calcMainPercentForSteps + 26.666;
        let calcMainPercentForStepsTofixed = calcMainPercentForSteps
          .toString()
          .match(/^-?\d+(?:\.\d{0,2})?/)[0];

        labalePercentageDriftForSteps[
          i
        ].innerHTML = calcMainPercentForStepsTofixed;
      }
      if (i == 4) {
        calcMainPercentForSteps = calcMainPercentForSteps + 33.333;
        let calcMainPercentForStepsTofixed = calcMainPercentForSteps
          .toString()
          .match(/^-?\d+(?:\.\d{0,2})?/)[0];

        labalePercentageDriftForSteps[
          i
        ].innerHTML = calcMainPercentForStepsTofixed;
      }
    });
  } else {
    alert("لطفا مقدار دریفت را محاسبه کنید");
  }
});

btnAppcetModalFooter.addEventListener("click", () => {
  MinDivModalForFooter.classList.add("d-none");
});
function calcStepsWind() {
  InputAvalueGolobal = InputA.value;
  InputBvalueGolobal = InputB.value;
  InputCvalueGolobal = InputC.value;
  let valueForLabaleStep = InputCvalueGolobal / 5;
  steplabaleLine.forEach((item, i) => {
    if (i === 0 || i == steplabaleLine.length - 1) {
      item.innerHTML = valueForLabaleStep / 2 + "m";
    } else item.innerHTML = valueForLabaleStep + "m";
  });
  let resultMinus_A_B = InputAvalueGolobal - InputBvalueGolobal;
  let resultDivide_A_b_By_5 = resultMinus_A_B / 5;
  calcTimeDelayForSteps(resultDivide_A_b_By_5);
  // calcDriftForSteps();
  // -------------------
}

function calcTimeDelayForSteps(value1) {
  let InputA = InputAvalueGolobal;
  InputA = Number(InputA);
  let arrayFor5StepsValue = [InputA];
  for (let index = 0; index < 5; index++) {
    InputA -= value1;
    arrayFor5StepsValue.push(InputA);
  }
  arrayFor5StepsValue.forEach((item, index) => {
    let nextIndex = arrayFor5StepsValue[index + 1];
    if (nextIndex) {
      let D = InputCvalueGolobal / item;
      let E = InputCvalueGolobal / ((item + nextIndex) / 2);
      let finalResualtTimeDelayForSteps = E - D;
      calcDriftForSteps(finalResualtTimeDelayForSteps, index);
    }
  });
}
function calcDriftForSteps(finalResualtTimeDelayInSteps, indexLoop) {
  let driftInputForSteps = driftInput.value;
  if (driftInputForSteps) {
    driftInputForSteps = Number(driftInputForSteps);
    let unitkhOrMs = driftInputForSteps * uinitValue;
    let result = finalResualtTimeDelayInSteps * unitkhOrMs * 17.6;
    result *= 2.54;
    let finalResualtDriftForsteps = result;
    let PercentageDriftForSteps =
      (finalResualtDriftForsteps / finalResualtDrift) * 100;
    // console.log(PercentageDriftForSteps);
    PercentageDriftForStepsArray.push(PercentageDriftForSteps);
  }
}
