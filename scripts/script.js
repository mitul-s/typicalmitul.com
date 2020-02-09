// // Sticky header on scroll
// $(document).scroll(function () {
//   if ($(window).scrollTop() > $('.hero').height()) {
//     $('body').addClass('fixed-nav');
//   } else {
//     $('body').removeClass('fixed-nav');
//   }
// });

const brands = [
  { image: "/images/logos/shopify_logo.svg" },
  { image: "/images/logos/google_logo.svg" },
  { image: "/images/logos/samsung_logo.svg" },
  { image: "/images/logos/amdocs_logo.svg" },
  { image: "/images/logos/500px_logo.svg" },
  { image: "/images/logos/uber_logo.svg" },
  { image: "/images/logos/amdocs_logo.svg" }
]

const brandsList = document.querySelector('.brands-items');

brandsList.innerHTML = `
    ${brands.map(image => `
        <img src="${image.image}" class="brand-logo">
    `).join('')}
`


// const photoGrid = [
//   { image: "/images/grid/karen.jpg" },
//   { image: "/images/grid/rookery.jpg" },
//   { image: "/images/grid/shangri.jpg" },
//   { image: "/images/grid/yeshua.jpg" },
//   { image: "/images/grid/rookery.jpg" },
//   { image: "/images/grid/shangri.jpg" },
//   { image: "/images/grid/karen.jpg" },
//   { image: "/images/grid/yeshua.jpg" },
//   { image: "/images/grid/shangri.jpg" },
//   { image: "/images/grid/karen.jpg" },
//   { image: "/images/grid/rookery.jpg" },
//   { image: "/images/grid/yeshua.jpg" }
// ]

const photoGrid = [
  { image: "/images/1.jpg" },
  { image: "/images/12.jpg" },
  { image: "/images/3.jpg" },
  { image: "/images/4.jpg" },
  { image: "/images/5.jpg" },
  { image: "/images/6.jpg" },
  { image: "/images/7.jpg" },
  { image: "/images/8.jpg" },
  { image: "/images/9.jpg" },
  { image: "/images/10.jpg" },
  { image: "/images/11.jpg" },
  { image: "/images/12.jpg" }
]

const photos = document.querySelector('.photos');


photos.innerHTML = `
    ${photoGrid.map(image => `
    <div class="photo-item">
        <img src="${image.image}" class="grid-photo" alt="">
    </div>
    `).join('')}
`

// Image Protection //
// Select all displayed photos
const image = document.querySelectorAll(".grid-photo");
var snackbar = document.getElementById('snackbar');

// Loop through nodeList and disable right click & drag
for (let i = 0; i < image.length; i++) {
  image[i].setAttribute("draggable", false);
  image[i].addEventListener("contextmenu", function (event) {
    snackbar.className = "show";
    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
    event.preventDefault();
  });
}


const photoGrid2 = [
  { image: "/images/grid/karen.jpg" },
  { image: "/images/grid/rookery.jpg" },
  { image: "/images/grid/shangri.jpg" },
]

const photos2 = document.querySelector('.photos-2');

photos2.innerHTML = `
    ${photoGrid2.map(image => `
    <div class="photo-item">
        <img src="${image.image}" alt="">
    </div>
    `).join('')}
`

// let currentIndex = 1;
// let totalCount = 5;

// setInterval(function() {
//   if(currentIndex > totalCount)
//     currentIndex = 1;

//     $('.hero-content').css('background-image', 'url(/images/hero/' + currentIndex++ + '.jpg)');
// }, 5000);




