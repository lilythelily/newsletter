"use strict";

const email = document.querySelector("#email");
const subscribe = document.querySelector("#desktop-subscribe");
const popup = document.querySelector(".popup");
const dismiss = document.querySelector(".dismiss");
const small = document.querySelector("small");
const main = document.querySelector("main");
const device = document.querySelector(".device");

const mobileEmail = document.querySelector("#email-mobile");
const mobileSub = document.querySelector("#mobile-subscribe");
const mobileSmall = document.querySelector("#mobile-small");
const mobileMain = document.querySelector(".mobile");
const mobilePopup = document.querySelector(".mobile-popup");
const mobileDismiss = document.querySelector(".mobile-dismiss");

function showSuccess() {
  popup.style.display = "block";
  main.classList.add("hide");
}

function showError() {
  small.classList.remove("hide");
  email.style.backgroundColor = "hsla(4, 100%, 67%, .2)";
  email.style.borderColor = "hsl(4, 100%, 67%)";
  email.style.color = "hsl(4, 100%, 67%)";
}

function validEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

subscribe.addEventListener("click", (e) => {
  validEmail(email.value) ? showSuccess() : showError();
});

function dismissPop() {
  popup.style.display = "none";
  main.classList.remove("hide");
}

dismiss.addEventListener("click", (e) => {
  dismissPop();
});

// mobile

function mobileShowSuccess() {
  mobilePopup.style.display = "block";
  mobileMain.style.opacity = "0%";
}

function mobileShowError() {
  mobileSmall.classList.remove("hide");
  mobileEmail.style.backgroundColor = "hsla(4, 100%, 67%, .2)";
  mobileEmail.style.borderColor = "hsl(4, 100%, 67%)";
  mobileEmail.style.color = "hsl(4, 100%, 67%)";
}

mobileSub.addEventListener("click", (e) => {
  validEmail(mobileEmail.value) ? mobileShowSuccess() : mobileShowError();
  console.log("clicked");
});

mobileDismiss.addEventListener("click", (e) => {
  mobilePopup.style.display = "none";
  mobileMain.style.opacity = "100%";
});
