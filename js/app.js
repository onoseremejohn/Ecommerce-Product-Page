const navToggler = document.querySelector(".nav-toggler");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".close");
const sidebarLinks = document.querySelectorAll(".sidebar-links a");

const lightbox = document.getElementById("lightbox");
const lightboxPrev = lightbox.querySelector(".lightbox-prev");
const lightboxNext = lightbox.querySelector(".lightbox-next");
const lightboxSlide = lightbox.querySelector(".lightbox-slide");
const closeLightbox = document.querySelector(".lightbox-close");

const products = [
  {
    id: 1,
    title: "sneakers",
    category: "men",
    imgs: [
      "./images/image-product-1.jpg",
      "./images/image-product-2.jpg",
      "./images/image-product-3.jpg",
      "./images/image-product-4.jpg",
    ],
    thumbnails: [
      "./images/image-product-1-thumbnail.jpg",
      "./images/image-product-2-thumbnail.jpg",
      "./images/image-product-3-thumbnail.jpg",
      "./images/image-product-4-thumbnail.jpg",
    ],
  },
];
// const closeLightbox = document.querySelector(".lightbox-close");
// lightbox.id = "lightbox";
// document.body.appendChild(lightbox);

const thumbnails = document.querySelectorAll(".thumbnail");

navToggler.addEventListener("click", function (e) {
  sidebar.classList.toggle("show-sidebar");
  //   document.body.style.background = "rgba(0, 0, 0, .5)";
  e.stopPropagation();
});

function hideSidebar() {
  sidebar.classList.remove("show-sidebar");
  //   document.body.style.background = "#ffffff";
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

// closeLightbox.addEventListener("click", (e) => {
//   lightbox.classList.remove("active");
// });

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
