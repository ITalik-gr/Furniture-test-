const swiper = new Swiper('.preference-slider', {
  slidesPerView: 3,
  navigation: {
    nextEl: '.preference-arrow-next',
    prevEl: '.preference-arrow-prev',
    disabledClass: 'preference-arrow--disable',
  },
});

// CATEGORIES

const categoriesData = [
  {
    img: 'img/categ_item_1.png', 
    name: 'Ліжко Рамона', 
    price: 8999, 
    oldPrice: false, 
    hit: false, 
    sale: false, 
    newItem: true
  },
  {
    img: 'img/categ_item_2.png', 
    name: 'Ліжко Честер', 
    price: 7000, 
    oldPrice: 8999, 
    hit: true, 
    sale: true, 
    newItem: false
  },
  {
    img: 'img/categ_item_3.png', 
    name: 'Ліжко Венеція люкс', 
    price: 10999, 
    oldPrice: false, 
    hit: false, 
    sale: false, 
    newItem: false
  },
  {
    img: 'img/categ_item_4.png', 
    name: 'Ліжко Імперія', 
    price: 8400, 
    oldPrice: false, 
    hit: false, 
    sale: false, 
    newItem: true
  },
  {
    img: 'img/categ_item_5.png', 
    name: 'Ліжко Адель', 
    price: 3400, 
    oldPrice: false, 
    hit: false, 
    sale: false, 
    newItem: false
  },
  {
    img: 'img/categ_item_6.png', 
    name: 'Ліжко Атлант', 
    price: 7999, 
    oldPrice: 8300, 
    hit: true, 
    sale: true, 
    newItem: false
  },
];
const categoriesDataSofa = [
  {
    img: 'img/categ_item_3.png', 
    name: 'Діван Рамона', 
    price: 8999, 
    oldPrice: false, 
    hit: false, 
    sale: false, 
    newItem: true
  },
  {
    img: 'img/categ_item_5.png', 
    name: 'Дівани Честер', 
    price: 7000, 
    oldPrice: 8999, 
    hit: true, 
    sale: true, 
    newItem: false
  },
  {
    img: 'img/categ_item_3.png', 
    name: 'Комод', 
    price: 10999, 
    oldPrice: false, 
    hit: false, 
    sale: false, 
    newItem: false
  },
  {
    img: 'img/categ_item_4.png', 
    name: 'Щось ще Імперія', 
    price: 8400, 
    oldPrice: false, 
    hit: false, 
    sale: false, 
    newItem: true
  },
];
// категорії тіки дві щоб не грузити непотрібну інфу

const categoriesWrap = document.querySelector('.categories-body'),
      categoriesToggle = document.querySelectorAll('.categories-nav-list__item');

renderItems(categoriesData);

categoriesToggle.forEach(toggle => { // перебираю всі категорії
  toggle.addEventListener('click', () => {
    switch (toggle.getAttribute('data-categories')) { // по кліку і перевірки який атрибут передаю в функ яка рендерить елемнти масив з данними який відповідає атрибуту (крісла, ліжка і тд)
      case 'sofa':
        renderItems(categoriesDataSofa);
        break;
      case 'Armchairs':
        renderItems(categoriesDataSofa);
        break;
      case 'dressers':
        renderItems(categoriesDataSofa);
        break;
      case 'Cabinets':
        renderItems(categoriesDataSofa);
        break;
      case 'Kitchen':
        renderItems(categoriesDataSofa);
        break;
      default: 
        renderItems(categoriesData);
        break;
    }
    categoriesToggle.forEach(item => item.classList.remove('categories-nav-list__item--active'));
    toggle.classList.add('categories-nav-list__item--active');
  })

});


function renderItems(data) {
  categoriesWrap.innerHTML = ``; // очистка 

  data.forEach(item => { // перебираю масив який прийшов і роблю з його карточки
    const {img, name, price, oldPrice, hit, sale, newItem} = item;
    const element = document.createElement('a');
    element.classList.add('categories-card');
    sale ? element.classList.add('categories-card-sale') : null;
    element.innerHTML = `
        <div class="categories-card_info-wrap">
            <div class="categories-card_new categories-card_info 
            ${newItem ? 'categories-card_info--active' : null}">Новинка</div>
            <div class="categories-card_hit categories-card_info 
            ${hit ? 'categories-card_info--active' : null} ">Хіт продаж</div>
            <div class="categories-card_sale categories-card_info
            ${sale ? 'categories-card_info--active' : null} ">Акція</div>
        </div>
        <div class="categories-card__image">
            <img src=${img} alt=${name}>
        </div>
        <div class="categories-card__text">
            <div class="categories-card__name">
            ${name}
            </div>
            <div class="categories-card__price">
                ${price} грн
                ${oldPrice ? `<div class="categories-card__old-price">${oldPrice} грн</div>` : ''}
          </div>
      </div>
    `;
    categoriesWrap.append(element);
  })
}


// плавний скрол
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// slider (говнокод якийся вийшов)

let carousel1 = document.querySelector('.header-slider'),
    carousel2 = document.querySelector('.header-slider-2'),
    slides = document.querySelectorAll('.header-slide'),
    current = document.querySelector('#current'),
    total = document.querySelector('#total'),
    prev = document.querySelector('.header-slider__arrow-prev'),
    next = document.querySelector('.header-slider__arrow-next'),
    currentIndex = 0;

function calcCurrentTotal() {
  if (slides.length < 10) { // якщо слайдів меньше 10, то підставляємо в тотал з 0
    total.textContent = `0${slides.length / 2}`;  
    current.textContent = `0${currentIndex + 1}`;
  } else { // якщо більше то просто кількість
    total.textContent = slides.length / 2;
    current.textContent = currentIndex + 1;
  }
// може можна краще. тут міняє стилі для стрелки
  if (currentIndex + 1 == slides.length / 2) {
    next.classList.add('header-slider__arrow-unactive');
  } else {
    next.classList.remove('header-slider__arrow-unactive');
  }

  if (currentIndex == 0) {
    prev.classList.add('header-slider__arrow-unactive');
  } else {
    prev.classList.remove('header-slider__arrow-unactive');
  }


}
calcCurrentTotal();

function goToSlide(slideIndex) {
  carousel1.style.transform = `translateX(-${slideIndex * 100}vw)`;
  carousel2.style.transform = `translateX(-${slideIndex * 100}vw)`;
}

prev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    goToSlide(currentIndex);
  }
  calcCurrentTotal();
});

next.addEventListener('click', () => {
  if (currentIndex < carousel1.children.length - 1) {
    currentIndex++;
    goToSlide(currentIndex);
  }
  calcCurrentTotal();
});