// LOADER

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {

    loader.style.display = "none";

  }, 2000);

});


// NAVBAR SCROLL

window.addEventListener("scroll", () => {

  const navbar = document.getElementById("navbar");

  navbar.classList.toggle("scrolled", window.scrollY > 50);

});


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

});


// TYPING EFFECT

const textArray = [

  "Create Responsive Websites",

  "Build Premium UI Designs",

  "Develop Interactive Web Apps"

];

let typingText = document.querySelector(".typing-text");

let arrayIndex = 0;

let textIndex = 0;

function typeText(){

  if(textIndex < textArray[arrayIndex].length){

    typingText.innerHTML += textArray[arrayIndex].charAt(textIndex);

    textIndex++;

    setTimeout(typeText,100);

  }

  else{

    setTimeout(eraseText,1500);

  }

}

function eraseText(){

  if(typingText.innerHTML.length > 0){

    typingText.innerHTML = typingText.innerHTML.slice(0,-1);

    setTimeout(eraseText,50);

  }

  else{

    arrayIndex++;

    if(arrayIndex >= textArray.length){

      arrayIndex = 0;

    }

    textIndex = 0;

    setTimeout(typeText,500);

  }

}

document.addEventListener("DOMContentLoaded", () => {

  if(textArray.length){

    setTimeout(typeText,500);

  }

});


// SCROLL REVEAL

function reveal(){

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;

    const revealTop = element.getBoundingClientRect().top;

    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){

      element.classList.add("active");

    }

  });

}

window.addEventListener("scroll", reveal);

reveal();