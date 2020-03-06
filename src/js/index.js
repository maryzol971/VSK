import owlCarouse from 'owl.carousel';

$('.slider-block').owlCarousel({
  items: 4,
  loop: true,
  dots: false,
  nav: true,
  responsive:{
    0:{
      items:1
    },
    // 768:{
    //   items:2
    // },
    1025:{
      items:4
    }
  }
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




