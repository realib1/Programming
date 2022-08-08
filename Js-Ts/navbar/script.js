const barMenu = document.querySelector(".bars-menu");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

const toTop = document.getElementById("back-to-top");
let topSmooth = document.getElementById("top");

barMenu.addEventListener("click", openNav);
navLink.forEach((n) => n.addEventListener("click", closeNav));

function openNav() {
  barMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeNav() {
  barMenu.classList.remove("active");
  navMenu.classList.remove("active");
}

window.addEventListener("scroll", backTop);
window.addEventListener("resize", backTop);

function backTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function backTop() {
  if (window.scrollY >= 970) {
    toTop.classList.add("show");
  } else {
    toTop.classList.remove("show");
  }
}

toTop.addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
      transition: "behavior 0.5s ease-in-out",
    });
  },
  1000
);

// Animations for smooth transition on scroll

const contents = document.querySelectorAll(".contents");
const imgs = document.querySelectorAll(".showcase");
const paragraphs = document.querySelectorAll(".para");
const heads = document.querySelectorAll(".head");

window.addEventListener(
  "scroll",
  contentAnimate,
  imageAnimate,
  paragraphAnimate,
  headAnimate
);


const triggerAnimate = (window.innerHeight / 6) * 8;
function contentAnimate() {


  contents.forEach((content) => {
    const contentAnim = content.getBoundingClientRect().top;

    if (contentAnim < triggerAnimate) {
        content.classList.add("content");
      } else {
        content.classList.remove("content");
      }
  });
}

function imageAnimate() {
  // const triggerAnimate = (window.innerHeight / 8) * 15;
  console.log(triggerAnimate);

  imgs.forEach((img) => {
    // const imgsAnim = img.getBoundingClientRect().top;

    if (window.innerWidth >= 970) {
        img.classList.add("showcases");
      } else {
        img.classList.remove("showcases");
      }
  });
}

function paragraphAnimate() {
  // const triggerAnimate = window.innerHeight / 4 * 5;

  paragraphs.forEach((paras) => {
    const paraAnim = paras.getBoundingClientRect().top;

    if (paraAnim >= triggerAnimate) {
        paras.classList.add("paras");
      } else {
        paras.classList.remove("paras");
      }
  });
}
function headAnimate() {
  // const triggerAnimate = window.innerHeight / 4 * 5;

  heads.forEach((head) => {
    const headAnim = head.getBoundingClientRect().top;

    if (headAnim >= triggerAnimate) {
        head.classList.add("heads");
      } else {
        head.classList.remove("heads");
      }
  });
}
