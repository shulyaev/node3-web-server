console.log("Client side javascript file is loaded");

const randomForm = document.querySelector("form");
const message = document.querySelector("#message");

randomForm.addEventListener("submit", (e) => {
  e.preventDefault();

  message.textContent = "Loading...";

  fetch("http://puzzle.mead.io/puzzle").then((response) => {
    response.json().then((data) => {
      message.textContent = data.puzzle;
    });
  });
});