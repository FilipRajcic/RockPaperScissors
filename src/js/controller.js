const container = document.querySelector(".container");
const you = document.querySelector(".you");
const oponent = document.querySelector(".oponent");
const oponentImg = document.querySelector(".oponent__img");
const winColor = "#ffe048";
const lossColor = "#f15481";

container.addEventListener("click", function (e) {
  //   e.preventDefault();
  const btn = e.target.closest(".you__item__btn");
  if (!btn) return;
  const playerImg = btn.closest(".you").querySelector(".you__img");
  const playerImageReplace = btn
    .querySelector(".you__item__img")
    .getAttribute("src");
  play(playerImg, playerImageReplace);
  //   playerPlay(playerImg, playerImageReplace);
  //   oponentPlay();
});
const play = function (playerImg, playerImageReplace) {
  const playerHand = playerPlay(playerImg, playerImageReplace);
  const oponentHand = oponentPlay();
  setTimeout(() => {
    const result = checkHands(playerHand, oponentHand);
    // console.log(result);
    setScore(result);
  }, 1000);
};
const playerPlay = function (playerImg, playerImageReplace) {
  setAnimation(playerImg, playerImageReplace);
  //   console.log(playerImg);
  const playerHand = playerImageReplace.split(".")[0].slice(1);
  let hand = -1;
  switch (playerHand) {
    case "rock":
      hand = 1;
      break;
    case "papper":
      hand = 2;
      break;
    case "scissors":
      hand = 3;
      break;
    default:
      hand = -1;
      break;
  }
  //   console.log(playerHand);
  return hand;
  //   const playerHand =
};
const oponentPlay = function () {
  const randomHand = Math.floor(Math.random() * 3 + 1);
  let hand = -1;
  let imgSrc = "";
  const [rock, papper, scissors] = document.querySelectorAll(".you__item__img");
  switch (randomHand) {
    case 1:
      imgSrc = rock.getAttribute("src");
      hand = 1;
      break;
    case 2:
      imgSrc = papper.getAttribute("src");
      hand = 2;
      break;
    case 3:
      imgSrc = scissors.getAttribute("src");
      hand = 3;
      break;
    default:
      hand = -1;
      break;
  }
  //   oponentImg.setAttribute("src", imgSrc);
  setAnimation(oponentImg, imgSrc);

  return hand;
  //   console.log(imgSrc);
};

const checkHands = function (playerHand, oponentHand) {
  if (playerHand === 1 && oponentHand === 2) {
    return "Loss";
  } else if (playerHand === 1 && oponentHand === 3) {
    return "Win";
  } else if (playerHand === 2 && oponentHand === 1) {
    return "Win";
  } else if (playerHand === 2 && oponentHand === 3) {
    return "Loss";
  } else if (playerHand === 3 && oponentHand === 1) {
    return "Loss";
  } else if (playerHand === 3 && oponentHand === 2) {
    return "Win";
  } else return "Tie";
};

const setAnimation = function (image, ImageReplace) {
  image.style.animation = "shake 1s linear";
  setTimeout(() => {
    image.style.animation = "none";

    image.setAttribute("src", ImageReplace);
  }, 1000);
  //   console.log(image);
  //   console.log("klik", image);
};

const setScore = function (result) {
  const scoreComponent = document.querySelector(".score");
  const winlos = document.querySelector(".winlos");
  let score = Number(scoreComponent.textContent.split(" ")[1]);
  //   console.log(score);
  if (result === "Win") {
    winlos.style.color = winColor;
    container.style.border = `2px solid ${winColor}`;
    scoreComponent.style.color = winColor;
    score++;
  } else if (result === "Loss") {
    winlos.style.color = lossColor;
    container.style.border = `2px solid ${lossColor}`;
    scoreComponent.style.color = lossColor;
    score--;
  } else {
    scoreComponent.style.color = "#fff";
    container.style.border = `2px solid #fff`;
    winlos.style.color = "#fff";
  }
  scoreComponent.textContent = `Score: ${score}`;

  winlos.textContent = result;
};
