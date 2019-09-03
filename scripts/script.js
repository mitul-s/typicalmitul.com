    const gallery = document.querySelector('.gallery');
    // const overlay = document.querySelector('.overlay');
    // const overlayImage = overlay.querySelector('img');
    // const overlayClose = overlay.querySelector('.close');

    function generateHTML([h, v]) {
      return `
        <div class="item h${h} v${v}">
          <img src="images/${randomNumber(12)}.jpg">
        </div>
      `;
    }
    function randomNumber(limit) {
      return Math.floor(Math.random() * limit) + 1;
    }

    // function handleClick(e) {
    //   const src = e.currentTarget.querySelector('img').src;
    //   overlayImage.src = src;
    //   overlay.classList.add('open');
    // }

    // function close() {
    //   overlay.classList.remove('open');
    // }

    const digits = Array.from({ length: 7 }, () => 
      [randomNumber(4), randomNumber(4)]);

    const html = digits.map(generateHTML).join('');
    gallery.innerHTML = html;

    // const items = document.querySelectorAll('.item');
    // items.forEach(item => item.addEventListener('click', handleClick));

    // overlayClose.addEventListener('click', close);