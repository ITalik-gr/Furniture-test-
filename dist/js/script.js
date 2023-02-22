
//   //! 1 варіант (простий)

//   // const sliderPrev = document.querySelector('.header-slider__arrow-prev'),
//   //       sliderNext = document.querySelector('.header-slider__arrow-next'),
//   //       sliderCurrent = document.querySelector('#current'),
//   //       sliderTotal = document.querySelector('#total'),
//   //       sliderItem = document.querySelectorAll('.swiper-slide'),
//   //       sliderItemText = document.querySelectorAll('.header-text');




//   //! 2 Варіант 

//   const prev = document.querySelector('.header-slider__arrow-prev'),
//         next = document.querySelector('.header-slider__arrow-next'),
//         current = document.querySelector('#current'),
//         total = document.querySelector('#total'),
//         slides = document.querySelectorAll('.swiper-slide'),
//         slidesWrapper = document.querySelector('.swiper-wrapper'),
//         slidesField = document.querySelector(fill),
//         width = window.getComputedStyle(slidesWrapper).width,
//         slider = document.querySelector(container);

//   let slideIndex = 1;
//   let offset = 0;

//   if (slides.length < 10) { // якщо слайдів меньше 10, то підставляємо в тотал з 0
//     total.textContent = `0${slides.length}`; 
//     current.textContent = `0${slideIndex}`;
//   } else { // якщо більше то просто кількість
//     total.textContent = slides.length;
//     current.textContent = slideIndex;
//   }

//   slidesField.style.width = 100 * slides.length + '%'; // щоб карусель займала стіки, скіки для слайдів треба
//   slidesField.style.display = 'flex';
//   slidesField.style.transition = '0.5s all';

//   slidesWrapper.style.overflow = 'hidden';

//   slider.style.position = 'relative'; // для точок

//   const indicators = document.createElement('ol'),
//         dots = []; // всі точки тут
//   indicators.classList.add('carousel-indicators');
//   indicators.style.cssText = `
//     position: absolute;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     z-index: 15;
//     display: flex;
//     justify-content: center;
//     margin-right: 15%;
//     margin-left: 15%;
//     list-style: none;
//   `;

//   slider.append(indicators); // точки в слайдер

//   function createDots() {
//     for(let i = 0; i < slides.length; i++) { // создає точок стіки скіки слайдов
//       const dot = document.createElement('li');
//       dot.setAttribute('data-slide-to', i + 1);
//       dot.style.cssText = `
//         box-sizing: content-box;
//         flex: 0 1 auto;
//         width: 30px;
//         height: 6px;
//         margin-right: 3px;
//         margin-left: 3px;
//         cursor: pointer;
//         background-color: #fff;
//         background-clip: padding-box;
//         border-top: 10px solid transparent;
//         border-bottom: 10px solid transparent;
//         opacity: .5;
//         transition: opacity .6s ease;
//       `;
//       if (i == 0) {
//         dot.style.opacity = 1;
//       }
  
//       indicators.append(dot);
  
//       dots.push(dot); // закидую в масив всі точки які зроблені
//     }
//   }

//   function calcNextOffset(int) {
//     if(int) { // int. якщо вперед гортати, то true, а назад false
//       if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) { // якщо прокрутили до кінця, ширина слайда * на кількість, то певертаємо транслейт на 0, на перший слайд
//         offset = 0;
//       } else {
//         offset += +width.replace(/\D/g, ''); // якщо ще не в кінці, то просто гортаємо на ширину 1 слайда
//       }
//     } else {
//       if (offset == 0) {
//         offset = +width.replace(/\D/g, '') * (slides.length - 1); // якщо перший слайд, то перекидаємо на останній
//       } else {
//         offset -= +width.replace(/\D/g, ''); // якщо це не перший слайд, то віднімаємо ширину 1 слайда
//       }
//       //? replace(/\D/g, '') - замінює всі не цифри на нічого, убирає
//     }
    
//   }

//   function calcSlidesIndex() {
//     if (slides.length < 10) {
//       current.textContent = `0${slideIndex}`;
//     } else {
//       current.textContent = slideIndex;
//     }
//   }

//   function dotsToggle() {
//     dots.forEach(dot => dot.style.opacity = ".5"); // всім точкам прозрачность
//     dots[slideIndex - 1].style.opacity = 1; // при зміні вибраного слайда давать такій же точкі по счету активность
//   }

//   function slidesTranslate() {
//     slidesField.style.transform = `translateX(-${offset}px)`;
//   }
//   createDots();

//   slides.forEach(slide => slide.style.width = width); // шоб слайди були однакові та влізли

//   next.addEventListener('click', () => {
//     calcNextOffset(true);
//     slidesTranslate(); // свайпає слайди на offset

//     if (slideIndex == slides.length) {
//       slideIndex = 1;
//     } else {
//       slideIndex++;
//     }

//     calcSlidesIndex();
//     dotsToggle();
  
//   })

//   prev.addEventListener('click', () => {

//     calcNextOffset(false);
//     slidesTranslate();

//     if (slideIndex == 1) {
//       slideIndex = slides.length;
//     } else {
//       slideIndex--;
//     }

//     calcSlidesIndex();
//     dotsToggle();
//   });

//   dots.forEach(dot => {
//     dot.addEventListener('click', (e) => {
//       const slideTo = e.target.getAttribute('data-slide-to'); // та точка на яку клік дає свій номер

//       slideIndex = slideTo; // цей номер клікнутой кидаємо для індекса
//       offset = +width.slice(0, width.length - 2) * (slideTo - 1);

//       slidesTranslate()
//       calcSlidesIndex();
//       dotsToggle();
//     })
//   })


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