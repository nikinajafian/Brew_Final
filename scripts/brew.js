let content = document.querySelector(".content");
let flvrScroll = document.querySelector(".flvr-scroll");

let bar1 = document.querySelector(".floating-bar:nth-child(1)");
let bar2 = document.querySelector(".floating-bar:nth-child(2)");
let winHeight
let barmar = 10;
let barmod;

//Setting default margins of floating bars on homepage
bar1.style.top = barmar + "%";
bar2.style.bottom = barmar + "%";

//Parallax scrolling floating bars on homepage
content.addEventListener("scroll", function () {
  winHeight = window.innerHeight;
  barmod = barmar - (content.scrollTop / winHeight) * 77;
  if (barmod < -67) {
    barmod = -67;
  }
  console.log(barmod);
  bar1.style.top = barmod + "%";
  bar2.style.bottom = barmod + "%";
});

//Enable verticle scrolling for horizontal div
    /* code adapted from user colxi at:
    https://stackoverflow.com/questions/55152799/prevent-window-
    vertical-scroll-until-divs-horizontal-scroll-reaches-its-end
    */
let extraScroll = 0;
let buffer = 50;

flvrScroll.addEventListener(
  "wheel",
  (e) => {
    if (!e.deltaY) return;
    let scrollDirection = e.deltaY;
    flvrScroll.scrollLeft += scrollDirection;
    let scrollLeft = Math.round(flvrScroll.scrollLeft);
    let maxScrollLeft = Math.round(
      flvrScroll.scrollWidth - flvrScroll.clientWidth
    );

    if (
      (scrollDirection < 0 && scrollLeft <= 0) ||
      (scrollDirection < 0 && extraScroll > 0)
    ) {
      extraScroll--;
    } else if (
      (scrollDirection > 0 && scrollLeft >= maxScrollLeft) ||
      (scrollDirection > 0 && extraScroll < 0)
    ) {
      extraScroll++;
    }

    if (extraScroll > buffer) {
      extraScroll = buffer;
    } else if (extraScroll < -buffer) {
      extraScroll = -buffer;
    }

    if (extraScroll > -buffer && extraScroll < buffer) {
      e.preventDefault();
    }

    return true;
  },
  false
);