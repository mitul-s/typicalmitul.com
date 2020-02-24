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
  { image: "/images/logos/dbrand_logo.svg" },
  { image: "/images/logos/amdocs_logo.svg" },
  { image: "/images/logos/500px_logo.svg" },
  { image: "/images/logos/uber_logo.svg" },
  { image: "/images/logos/lg_logo.svg" }
]

const brandsList = document.querySelector('.brands-items');

brandsList.innerHTML = `
    ${brands.map(image => `
        <img src="${image.image}" class="brand-logo">
    `).join('')}
`

const photoGrid = [
  { image: "/images/grid/portfolio_10.jpg",
    alt: "Looking up at skyscarpers in Toronto"
  },
  { image: "/images/grid/portfolio_11.jpg" },
  { image: "/images/grid/portfolio_06.jpg" },
  { image: "/images/grid/portfolio_11.jpg" },
  { image: "/images/grid/portfolio_06.jpg" },
  { image: "/images/grid/portfolio_06.jpg" },
  { image: "/images/grid/portfolio_13.jpg" },
  { image: "/images/grid/portfolio_14.jpg" },
  { image: "/images/grid/portfolio_15.jpg" },
  { image: "/images/grid/portfolio_05.jpg" },
  { image: "/images/grid/portfolio_06.jpg" },
  { image: "/images/grid/portfolio_09.jpg" }
]

const photos = document.querySelector('.photos');


photos.innerHTML = `
    ${photoGrid.map(image => `
    
      <a href="${image.image}" class="photo-item glightbox">
        <img src="${image.image}" class="grid-photo lazyload" alt="${image.alt}">
      </a>
    
    `).join('')}
`  

  // < div class="photo-item" >
  //   <img src="${image.image}" class="grid-photo" alt="${image.alt}">
  //   </div>

// Image Protection //
// Select all displayed photos
const gridImage = document.querySelectorAll(".grid-photo");
var snackbar = document.getElementById('snackbar');

// Loop through nodeList and disable right click & drag
for (let i = 0; i < gridImage.length; i++) {
  gridImage[i].setAttribute("draggable", false);
  gridImage[i].addEventListener("contextmenu", function (event) {
    snackbar.className = "show";
    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
    event.preventDefault();
  });
}

// let currentIndex = 1;
// let totalCount = 5;

// setInterval(function() {
//   if(currentIndex > totalCount)
//     currentIndex = 1;

//     $('.hero-content').css('background-image', 'url(/images/hero/' + currentIndex++ + '.jpg)');
// }, 5000);




