window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#cirkel_container").classList.add("grow");
  document.addEventListener("animationend", cirkelNext);
}

function cirkelNext() {
  console.log("cirkelNext");
  document.querySelector("#cirkel_container").classList.remove("grow");
  document.removeEventListener("animationend", cirkelNext);
  document.querySelector("#cirkel_container3").classList.add("grow");
  document.addEventListener("animationend", cirkelLast);
}

function cirkelLast() {
  console.log("cirkelLast");
  document.removeEventListener("animationend", cirkelLast);
  document.querySelector("#cirkel_container2").classList.add("grow");
  document.addEventListener("animationend", cirkelReset);
}

function cirkelReset() {
  console.log("cirkelReset");
  document.querySelector.classList = "";
  document.removeEventListener("animationend", cirkelReset);
  document.querySelector("#cirkel_container").classList.add("grow");
}
