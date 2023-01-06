window.addEventListener("load", sidenVises);

const kul1 = document.querySelector("#kulklump_container");
const guld1 = document.querySelector("#guldklump_container");

function sidenVises() {
  console.log("sidenVises");
  kul1.classList.add("spin");
  guld1.classList.add("bouncing");
}
