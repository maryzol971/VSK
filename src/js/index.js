import owlCarouse from 'owl.carousel';
import inputMask from 'inputmask';

//  Counter sliderMain
const updateSliderCountMain = ({item, relatedTarget}) => {
  const indexInLoop = (relatedTarget._clones.length / 2);
  let realIndex = item.index - indexInLoop;
  if(realIndex >= item.count){
    realIndex = realIndex - item.count;
  }
  const text = `${realIndex  + 1} / ${item.count}`;
  $('.slider-main__counter').text(text);
};

$('#sliderMain').owlCarousel({
  items: 4,
  loop: true,
  dots: false,
  nav: true,
  responsive:{
    0:{
      items:1
    },
    550:{
      items:2
    },
    960:{
      items:3
    },
    1280:{
      items:4
    }
  },

  onInitialized: updateSliderCountMain,
  onTranslated: updateSliderCountMain
});


$('#sliderAdvantage').owlCarousel({
  responsive: {
    0: {
      items: 1,
      loop: true,
      dots: false,
      dotData: true,
      dotsContainer: '.advantage-dots',
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: 700,
    },
    1024: {
      items: 5,
      dots: false,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
    }
  }
});


// Counter sliderNews
const updateSliderCountNews = ({item, relatedTarget}) => {
  const indexInLoop = (relatedTarget._clones.length / 2);
  let realIndex = item.index - indexInLoop;
  if(realIndex >= item.count){
    realIndex = realIndex - item.count;
  }
  const text = `${realIndex  + 1} / ${item.count}`;
  $('.slider-news__counter').text(text);
};

$('#sliderNews').owlCarousel({
  responsive: {
    320: {
      items: 1,
      loop: true,
      dots: false,
      nav: true,
      margin: 48,
    },
    1024: {
      items: 4,
      dots: false,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
    }
  },

  onInitialized: updateSliderCountNews,
  onTranslated: updateSliderCountNews
});


$('.menu-toggle').on('click', function(e){
  e.preventDefault();

  $('.dropdown-menu').toggleClass('dropdown-menu_visible');
});


$('.form-toggle').on('click', function(e){
  e.preventDefault();

  $('.callback-form').toggleClass('callback-form_visible');
});


//menu height
$('.dropdown-list').slideUp(0);

$('.menu__item_insurance').on('mouseenter', function(){
   $('.dropdown-list').slideDown(500);
   console.log('open');
});

$('.menu-toggle').on('click', function(){
  $('.dropdown-list').slideUp(500);
  console.log('close');
});

// $('.menu__item_insurance').on('mouseleave', function(){
//   $('.slide-list').slideUp(500);
//   console.log('close');
// });


//  inputMask
const phoneSelectors = document.querySelectorAll('.phone__mask');
const im = new Inputmask("+7 (999) 999-99-99");

for(let i = 0; i < phoneSelectors.length; i++){
  im.mask(phoneSelectors[i]);
}



