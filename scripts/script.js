// // Sticky header on scroll
// $(document).scroll(function () {
//   if ($(window).scrollTop() > 0) {
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


const element = document.querySelector('.brands-items');

element.innerHTML = `
    ${brands.map(image => `
        <img src="${image.image}" class="brand-logo">
    `).join('')}
`
