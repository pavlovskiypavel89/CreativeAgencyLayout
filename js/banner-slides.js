"use strict";
const [banner] = document.getElementsByClassName("banner-section");
const [slides] = banner.getElementsByClassName("banner-slides");
const [slider] = banner.getElementsByClassName("banner-slider");

const toggleSlider = activatedBtn => {
  slider.querySelector(".active").classList.remove("active");
  activatedBtn.classList.add("active");
}

const changeSlide = sliderBtns => {
  const activatedSlideNum = Array.from(sliderBtns).findIndex(
    btn => btn.classList.contains("active")
  );
  
  slides.querySelector(".current-slide").classList.remove("current-slide");
  slides.getElementsByClassName("banner-slide")[activatedSlideNum].classList.add("current-slide");
}

const flipSlide = event => {
  if (event.target.parentElement === event.currentTarget) {
    toggleSlider(event.target);
    changeSlide(event.currentTarget.children);
  }
}

slider.addEventListener("click", flipSlide);
