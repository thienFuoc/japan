const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const main_nav = document.getElementById("main_nav");
const close = document.getElementById("close");
const text = document.getElementById("text");
const circle__mobile = document.getElementById("circle__mobile");
const circle__desktop = document.getElementById("circle__desktop");
const vid = document.getElementById("vid");
const paus = document.getElementById("pause");
const gallery = document.getElementById("gallery");
const link = document.getElementById("link");

const images = [
  "./img/human-img.png",
  "./img/fuji-img.png",
  "./img/front-img.png",
  "./img/roof-img.png",
];

const links = [
  "Home",
  "Experience",
  "Blog",
  "Contact",
]

hamburger.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  main_nav.classList.toggle("px-0");
  close.classList.toggle("hidden");
  hamburger.classList.toggle("hidden");
});
close.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  main_nav.classList.toggle("px-0");
  hamburger.classList.toggle("hidden");
  close.classList.toggle("hidden");
});

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  text.style.top = value + 1.1 + "px";
  circle__mobile.style.left = -value + 0.15 + "px";
  circle__desktop.style.transform = "rotate(" + (value * 0.5) + "deg)";
});

paus.addEventListener("click", function () {
  if (vid.paused) {
    vid.play();
    paus.classList.add("hidden");
  }
});
vid.addEventListener("click", function () {
  if (vid.play) {
    vid.pause();
    paus.classList.remove("hidden");
  }
});

images.forEach(url => {
  const imgEl = document.createElement('img');
  imgEl.src = url;
  imgEl.classList.add('w-full', 'object-cover');
  gallery.appendChild(imgEl);
});

for (let i = 0; i < links.length; i++) {
  const addEl = document.createElement("a");
  addEl.textContent = links[i];
  addEl.href = '#';
  link.appendChild(addEl);
}
