const navToggler = document.querySelector(".nav-toggler");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".close");
const sidebarLinks = document.querySelectorAll(".sidebar-links a");
const shadow = document.getElementById("shadow");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const mobileSlides = document.querySelectorAll(".image");
let mobileCounter = 0;

const mobileCarousel = () => {
  if (mobileCounter === mobileSlides.length) {
    mobileCounter = 0;
  }
  if (mobileCounter < 0) {
    mobileCounter = mobileSlides.length - 1;
  }
  mobileSlides.forEach((slide) => {
    slide.style.transform = `translateX(-${mobileCounter * 100}%)`;
  });
};

mobileSlides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
next.addEventListener("click", () => {
  mobileCounter++;
  mobileCarousel();
});

prev.addEventListener("click", () => {
  mobileCounter--;
  mobileCarousel();
});

const lightbox = document.getElementById("lightbox");
const lightboxPrev = lightbox.querySelector(".lightbox-prev");
const lightboxNext = lightbox.querySelector(".lightbox-next");
const closeLightbox = document.querySelector(".lightbox-close");

// const products = [
//   {
//     id: 1,
//     title: "sneakers",
//     category: "men",
//     imgs: [
//       "./images/image-product-1.jpg",
//       "./images/image-product-2.jpg",
//       "./images/image-product-3.jpg",
//       "./images/image-product-4.jpg",
//     ],
//     thumbnails: [
//       "./images/image-product-1-thumbnail.jpg",
//       "./images/image-product-2-thumbnail.jpg",
//       "./images/image-product-3-thumbnail.jpg",
//       "./images/image-product-4-thumbnail.jpg",
//     ],
//   },
// ];

const thumbnails = document.querySelectorAll(".thumbnail");

navToggler.addEventListener("click", function (e) {
  cartDiv.classList.remove("cart-div-active");
  shadow.classList.add("active-shadow");
  sidebar.classList.toggle("show-sidebar");
  e.stopPropagation();
});

function hideSidebar() {
  shadow.classList.remove("active-shadow");
  sidebar.classList.remove("show-sidebar");
}

closeSidebar.addEventListener("click", hideSidebar);

window.addEventListener("click", hideSidebar);

sidebar.addEventListener("click", function (e) {
  e.stopPropagation();
});

sidebarLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    hideSidebar();
  });
});

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    lightbox.classList.add("active");

    // displayLightbox(img, t1, t2, t3, t4);
  });
});

function displayLightbox(img, t1, t2, t3, t4) {
  lightbox.innerHTML = `<div class="lightbox-container">
        <div class="lightbox-main">
          <div class="relative">
            <img
              class="main"
              src="${img}"
              alt="sneakers"
            />
            <button class="lightbox-prev" type="button">
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button class="lightbox-next" type="button">
              <i class="fa-solid fa-angle-right"></i>
            </button>
            <button class="lightbox-close" type="button">
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="lightbox-thumbnail-container">
          <figure class="lightbox-thumbnail">
            <img
              src="${t1}"
              alt="sneakers thumbnail"
            />
          </figure>
          <figure class="lightbox-thumbnail">
            <img
              src="${t2}"
              alt="sneakers thumbnail"
            />
          </figure>
          <figure class="lightbox-thumbnail">
            <img
              src="${t3}"
              alt="sneakers thumbnail"
            />
          </figure>
          <figure class="lightbox-thumbnail">
            <img
              src="${t4}"
              alt="sneakers thumbnail"
            />
          </figure>
        </div>
      </div>`;
}

const slides = document.querySelectorAll(".main");
const lightboxThumbnails = document.querySelectorAll(".lightbox-thumbnail");
const lightboxThumbnailsArray = [...lightboxThumbnails];

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;

const carousel = () => {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
  const curr = lightbox.querySelector(".current-thumbnail");
  curr.classList.remove("current-thumbnail");
  lightboxThumbnailsArray[counter].classList.add("current-thumbnail");
};

lightboxNext.addEventListener("click", () => {
  counter++;
  carousel();
});

lightboxPrev.addEventListener("click", () => {
  counter--;
  carousel();
});

lightboxThumbnails.forEach((nail, index) => {
  nail.addEventListener("click", () => {
    counter = index;
    carousel();
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const numVal = document.getElementById("number");
const addToCart = document.querySelector(".add-to-cart");
const cartDiv = document.querySelector(".cart-div");
const cartIcon = document.querySelector(".cart");

cartIcon.addEventListener("click", (e) => {
  cartDiv.classList.toggle("cart-div-active");
  hideSidebar();
  e.stopPropagation();
});

cartDiv.addEventListener("click", (e) => {
  e.stopPropagation();
});

window.addEventListener("click", () => {
  cartDiv.classList.remove("cart-div-active");
});

plus.addEventListener("click", () => {
  let number = document.getElementById("number").textContent;
  number++;
  numVal.textContent = number;
});

minus.addEventListener("click", () => {
  let number = document.getElementById("number").textContent;
  number--;
  if (number < 0) {
    number = 0;
  }
  numVal.textContent = number;
});

addToCart.addEventListener("click", () => {
  let number = document.getElementById("number").textContent;
  number = parseInt(number);
  if (number !== 0) {
    updateCart(number);
    numVal.textContent = "0";
  }
});

function updateCart(number) {
  const empty = cartDiv.querySelector(".cart-div-empty");
  if (empty) {
    empty.remove();
    const button = document.createElement("button");
    button.classList.add("checkout", "btn");
    const attr = document.createAttribute("type");
    attr.value = "button";
    button.setAttributeNode(attr);
    button.innerHTML = `<p>Checkout</p>`;
    const element = document.createElement("div");
    element.classList.add("cart-div-not-empty");
    element.innerHTML = `<li class="cart-div-item">
          <img
            class="cart-div-item-thumbnail"
            src="./images/image-product-1-thumbnail.jpg"
            alt=""
          />
          <div class="cart-div-item-name">
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x <span class='kz'>${number}</span><span> $${
      number * 125
    }.00</span></p>
          </div>
          <button type="button" class="cart-div-item-trash">
            <img src="./images/icon-delete.svg" alt="X" />
          </button>
        </li>`;

    cartDiv.appendChild(element);
    cartDiv.appendChild(button);
    const trashBtn = element.querySelector(".cart-div-item-trash");
    trashBtn.addEventListener("click", trashItem);
  } else {
    let a = cartDiv.querySelector(".kz").textContent;
    a = parseInt(a);
    let rep = cartDiv.querySelector(".cart-div-not-empty");
    const element = document.createElement("div");
    element.classList.add("cart-div-not-empty");
    element.innerHTML = `<li class="cart-div-item">
          <img
            class="cart-div-item-thumbnail"
            src="./images/image-product-1-thumbnail.jpg"
            alt=""
          />
          <div class="cart-div-item-name">
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x <span class='kz'>${a + number}</span><span> $${
      (a + number) * 125
    }.00</span></p>
          </div>
          <button type="button" class="cart-div-item-trash">
            <img src="./images/icon-delete.svg" alt="X" />
          </button>
        </li>`;

    cartDiv.replaceChild(element, rep);
    const trashBtn = element.querySelector(".cart-div-item-trash");
    trashBtn.addEventListener("click", trashItem);
  }
}

const trashItem = () => {
  let remove = cartDiv.querySelector(".cart-div-not-empty");
  let checkout = cartDiv.querySelector(".checkout");
  cartDiv.removeChild(checkout);
  const element = document.createElement("div");
  element.classList.add("cart-div-empty");
  element.innerHTML = `<p>Your cart is empty</p>`;
  cartDiv.replaceChild(element, remove);
};

window.addEventListener("scroll", () => {
  cartDiv.classList.remove("cart-div-active");
});
