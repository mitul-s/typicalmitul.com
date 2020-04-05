// // Sticky header on scroll
// $(document).scroll(function () {
//   if ($(window).scrollTop() > $('.hero').height()) {
//     $('body').addClass('fixed-nav');
//   } else {
//     $('body').removeClass('fixed-nav');
//   }
// });

const nav = document.querySelector("#navigation");
const navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {
    document.body.style.paddingTop = '90px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixedNav);

const brands = [
  { image: "/images/logos/shopify_logo.svg",
    alt: "Shopify brand logo"
  },
  { image: "/images/logos/google_logo.svg",
    alt: "Google brand logo"
  },
  { image: "/images/logos/samsung_logo.svg",
    alt: "Samsung brand logo"
  },
  { image: "/images/logos/dbrand_logo.svg",
    alt: "dbrand logo"
  },
  { image: "/images/logos/amdocs_logo.svg",
    alt: "Amdocs logo"
  },
  { image: "/images/logos/500px_logo.svg",
    alt: "500px logo"
  },
  { image: "/images/logos/uber_logo.svg",
    alt: "Uber logo"
  },
  { image: "/images/logos/lg_logo.svg",
    alt: "LG Electronics logo"
  }
]

const brandsList = document.querySelector('.brands-items');

brandsList.innerHTML = `
    ${brands.map(image => `
        <img src="${image.image}" class="brand-logo">
    `).join('')}
`

const photoGrid = [
  { image: "/images/grid/portfolio_10.jpg",
    alt: "Looking up at skyscarpers in Toronto on a rainy day"
  },
  { image: "/images/grid/portfolio_11.jpg",
    alt: "An old school cadillac contrasting against the Los Angeles Sky."
  },
  { image: "/images/grid/portfolio_06.jpg",
    alt: "Looking down on an empty Times Square during the middle of the night"
  },
  { image: "/images/grid/portfolio_03.jpg",
    alt: "The iconic Rookery spiral staircase in Chicago"
  },
  { image: "/images/grid/portfolio_07.jpg",
    alt: "A symmetrical photo of a subway track in New York"
  },
  { image: "/images/grid/portfolio_20.jpg",
    alt: "Overlooking a subway track towards the Trump Tower in Chicago"
  },
  { image: "/images/grid/portfolio_13.jpg",
    alt: "Looking up in Toronto's financial district"
  },
  { image: "/images/grid/portfolio_22.jpg",
    alt: "The CN Tower above the clouds"
  },
  { image: "/images/grid/portfolio_15.jpg",
    alt: "Light trails of Chicago's expressway"
  },
  { image: "/images/grid/portfolio_05.jpg",
    alt: "A camera looking up at New York City's Oculus"
  },
  { image: "/images/grid/portfolio_09.jpg",
    alt: "Cityscape of New York City"
  },
  { image: "/images/grid/portfolio_21.jpg",
    alt: "A contrasting photo of a model in light against harsh shadows"
  }
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
const gridImage = document.querySelectorAll(".photo-item");
const gridImageLink = document.querySelectorAll(".grid-photo");
var snackbar = document.getElementById('snackbar');

// Loop through nodeList and disable right click & drag
for (let i = 0; i < gridImage.length && i < gridImageLink.length; i++) {
  gridImageLink[i].setAttribute("draggable", false);
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




