/* ───────── NAV MÓVIL ───────── */

function toggleMenu() {

  const menu =
  document.getElementById('mobMenu');

  const ham =
  document.getElementById('ham');

  if(menu){
    menu.classList.toggle('open');
  }

  if(ham){
    ham.classList.toggle('open');
  }
}

function closeMenu() {

  const menu =
  document.getElementById('mobMenu');

  const ham =
  document.getElementById('ham');

  if(menu){
    menu.classList.remove('open');
  }

  if(ham){
    ham.classList.remove('open');
  }
}

/* ───────── HERO SLIDER ───────── */

const slides = [

  {
    title: 'Raíces y Sueños',
    sub: 'Identidad cultural y resistencia'
  },

  {
    title: 'Arte que cuenta historias',
    sub: 'Murales, fotos y voces del barrio'
  },

  {
    title: 'Sé parte del cambio',
    sub: 'Voluntariado y donaciones abiertas'
  }

];

let current = 0;

function goToSlide(n) {

  current =
  (n + slides.length) % slides.length;

  const title =
  document.getElementById('hero-title');

  const sub =
  document.getElementById('hero-sub');

  if(title && sub){

    title.textContent =
    slides[current].title;

    sub.textContent =
    slides[current].sub;
  }

  document
  .querySelectorAll('.hero-dot')
  .forEach((d, i) => {

    d.classList.toggle(
      'active',
      i === current
    );

  });
}

function nextSlide() {

  goToSlide(current + 1);
}

function prevSlide() {

  goToSlide(current - 1);
}

/* ───────── FILTROS ───────── */

function filterTab(btn, year) {

  document
  .querySelectorAll('.tab')
  .forEach(t =>
    t.classList.remove('active')
  );

  btn.classList.add('active');

  document
  .querySelectorAll('.ccard')
  .forEach(c => {

    c.style.display =
    (
      year === 'todo' ||
      c.dataset.y === year
    )
    ? 'grid'
    : 'none';

  });
}

/* ───────── PODCAST ───────── */

function playEp(row){

  const name =
  row.querySelector('.ep-info-name')
  ?.textContent;

  const btn =
  row.querySelector('.ep-play');

  if(!btn) return;

  const playing =
  btn.textContent === '⏸';

  document
  .querySelectorAll('.ep-play')
  .forEach(b =>
    b.textContent = '▶'
  );

  if(!playing){

    btn.textContent = '⏸';

    alert(
      '▶ Reproduciendo: ' + name
    );
  }
}

/* ───────── MODAL GALERÍA ───────── */

function openModal(title, desc, img){

  const modal =
  document.getElementById('modal');

  const modalTitle =
  document.getElementById('modal-title');

  const modalDesc =
  document.getElementById('modal-desc');

  const modalImg =
  document.getElementById('modal-img');

  if(modal){
    modal.style.display = 'flex';
  }

  if(modalTitle){
    modalTitle.textContent = title;
  }

  if(modalDesc){
    modalDesc.textContent = desc;
  }

  if(modalImg){
    modalImg.src = img;
  }
}

function closeModal(){

  const modal =
  document.getElementById('modal');

  if(modal){
    modal.style.display = 'none';
  }
}

/* ───────── NEWSLETTER ───────── */

function subscribeNewsletter(){

  const email =
  document.getElementById('newsEmail');

  if(
    !email ||
    !email.value.includes('@')
  ){

    alert(
      'Ingresa un correo válido'
    );

    return;
  }

  alert(
    'Gracias por suscribirte'
  );

  email.value = '';
}

/* ───────── CARRUSEL ───────── */

const carouselCards =
[
  ...document.querySelectorAll('.ccard')
];

const dotsContainer =
document.getElementById('carouselDots');

let carouselIndex = 0;

if(
  dotsContainer &&
  carouselCards.length > 0
){

  carouselCards.forEach((_,i)=>{

    const dot =
    document.createElement('button');

    dot.className =
    'carousel-dot' +
    (i === 0 ? ' active' : '');

    dot.onclick = () =>
    goToCard(i);

    dotsContainer.appendChild(dot);

  });

  function updateDots(){

    document
    .querySelectorAll('.carousel-dot')
    .forEach((dot,i)=>{

      dot.classList.toggle(
        'active',
        i === carouselIndex
      );

    });
  }

  function goToCard(index){

    if(index === carouselIndex)
    return;

    const current =
    carouselCards[carouselIndex];

    const next =
    carouselCards[index];

    const direction =
    index > carouselIndex;

    current.classList.remove('active');

    current.classList.add(
      direction
      ? 'exit-left'
      : 'exit-right'
    );

    next.classList.remove(
      'exit-left',
      'exit-right'
    );

    requestAnimationFrame(()=>{

      next.classList.add('active');

    });

    setTimeout(()=>{

      current.classList.remove(
        'exit-left',
        'exit-right'
      );

      carouselIndex = index;

      updateDots();

    },450);
  }

  function moveCarousel(direction){

    let next =
    carouselIndex + direction;

    if(next < 0){

      next =
      carouselCards.length - 1;
    }

    if(next >= carouselCards.length){

      next = 0;
    }

    goToCard(next);
  }

  carouselCards[0]
  .classList.add('active');

  window.moveCarousel =
  moveCarousel;
}

/* ───────── CARACOL ───────── */

function toggleSnail(){

  const bubble =
  document.getElementById(
    "snailBubble"
  );

  if(bubble){

    bubble.classList.toggle(
      "open"
    );
  }
}

function closeSnail(){

  const bubble =
  document.getElementById(
    "snailBubble"
  );

  if(bubble){

    bubble.classList.remove(
      "open"
    );
  }
}

function closeSnail(){

  const bubble =
  document.getElementById(
    "snailBubble"
  );

  if(bubble){

    bubble.classList.remove(
      "show"
    );
  }
}

