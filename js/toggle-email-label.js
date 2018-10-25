"use strict";
const input = document.getElementById("email");
const [label] = document.getElementsByClassName("email-label");
input.addEventListener("blur", event => label.classList.toggle("hidden", event.currentTarget.value));