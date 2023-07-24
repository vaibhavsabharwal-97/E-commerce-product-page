const icon_toggle = document.querySelector(".icon-toggle");
const close = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

icon_toggle.addEventListener("click", () => {
  close.classList.toggle("show");
  hamburger.classList.toggle("show");
  menu.classList.toggle("show");
});

// slider
const slide = document.querySelectorAll(".slide");
const slider = document.querySelectorAll(".slider");
const d_slider = document.querySelectorAll(".desktop-slide");
const next = document.querySelectorAll(".arrow-right");
const prev = document.querySelectorAll(".arrow-left");

var current = 0;
var start = 0;
var d_current = 0;

function reset() {
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
}

function d_reset() {
  for (let x = 0; x < d_slider.length; x++) {
    d_slider[x].style.display = "none";
  }
}

function restart() {
  for (let j = 0; j < slider.length; j++) {
    slider[j].style.display = "none";
  }
}

function startSlide() {
  reset();
  slide[0].style.display = "block";
}

function d_startSlide() {
  d_reset();
  d_slider[0].style.display = "block";
}

function beginSlide() {
  restart();
  slider[0].style.display = "block";
}

function left() {
  reset();
  slide[current - 1].style.display = "block";
  current--;
}

function d_left() {
  d_reset();
  d_slider[d_current - 1].style.display = "block";
  d_current--;
}

function moveleft() {
  restart();
  slider[start - 1].style.display = "block";
  start--;
}

function right() {
  reset();
  slide[current + 1].style.display = "block";
  current++;
}

function d_right() {
  d_reset();
  d_slider[d_current + 1].style.display = "block";
  d_current++;
}

function moveright() {
  restart();
  slider[start + 1].style.display = "block";
  start++;
}

next.forEach((next) => {
  next.addEventListener("click", () => {
    if (current === slide.length - 1) {
      current = -1;
    }
    right();

    if (d_current === d_slider.length - 1) {
      d_current = -1;
    }
    d_right();

    if (start === slider.length - 1) {
      start = -1;
    }

    moveright();
  });
});

prev.forEach((prev) => {
  prev.addEventListener("click", () => {
    if (current === 0) {
      current = slide.length;
    }
    left();

    if (d_current === 0) {
      d_current = d_slider.length;
    }
    d_left();

    if (start === 0) {
      start = slider.length;
    }

    moveleft();
  });
});

startSlide();
d_startSlide();
beginSlide();

// counter
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const count = document.querySelector(".count");
let a = 0;

plus.addEventListener("click", () => {
  a++;

  count.innerHTML = a;
});

minus.addEventListener("click", () => {
  if (a > 0) {
    a--;
    count.innerHTML = a;
  }
});

// Cart
const icon_cart = document.querySelector(".icon-cart");
const cart_count = document.querySelector(".icon-cart-count");
const cart_order = document.querySelector(".cart-order");
const added_cart = document.querySelector(".added-cart");
const empty_cart = document.querySelector(".empty-cart");
const del_btn = document.querySelector(".delete");
const checkout = document.querySelector(".checkout-btn");
const currentCount = document.querySelector(".currentCount");
const total = document.querySelector(".currentTotal");
const icon_avatar = document.querySelector(".icon-avatar");

icon_cart.addEventListener("click", () => {
  cart_order.classList.toggle("show");
});

// Add to cart
const addCart = document.querySelector("#form");

addCart.addEventListener("click", (e) => {
  e.preventDefault();

  if (a == 0) {
    alert("Add Item");
  } else {
    empty_cart.style.display = "none";
    added_cart.style.display = "block";
    cart_count.style.display = "block";
    cart_count.innerHTML = a;
    currentCount.innerHTML = a;
    total.innerHTML = `$${125 * a}`;
  }
});

// Empty cart
del_btn.addEventListener("click", () => {
  empty_cart.style.display = "block";
  added_cart.style.display = "none";
  cart_count.style.display = "none";

  if (count != 0) {
    a = 0;
    count.innerHTML = a;
  }
});

// checkout
checkout.addEventListener("click", () => {
  cart_count.style.display = "none";
  added_cart.style.display = "none";
  empty_cart.style.display = "block";
  cart_order.classList.toggle("show");

  if (count != 0) {
    a = 0;
    count.innerHTML = a;
  }
});

// desktop Sneakers
const main_sneaker = document.querySelector(".main-sneaker");
const desktop_slider = document.querySelector(".desktop-slider");
const icon_delete = document.querySelector(".icon-delete");

main_sneaker.addEventListener("click", () => {
  desktop_slider.style.display = "block";
});

icon_delete.addEventListener("click", () => {
  desktop_slider.style.display = "none";
});

// desktop sneakers slider
const thumbnails = document.querySelectorAll(".s_sneaker");
const cart_slider = document.querySelector(".sneaker-list-desktop-content");
const s_slider = document.querySelector(".main-sneaker-slider");

thumbnails[0].addEventListener("click", () => {
  s_slider.style.transform = "translate(0)";
  cart_slider.style.transform = "translate(0)";
});

thumbnails[1].addEventListener("click", () => {
  s_slider.style.transform = "translate(-25.5%)";
  cart_slider.style.transform = "translate(-25.5%)";
});

thumbnails[2].addEventListener("click", () => {
  s_slider.style.transform = "translate(-51%)";
  cart_slider.style.transform = "translate(-51%)";
});

thumbnails[3].addEventListener("click", () => {
  s_slider.style.transform = "translate(-76.5%)";
  cart_slider.style.transform = "translate(-76.5%)";
});