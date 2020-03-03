import owlCarouse from 'owl.carousel';

$('.slider-block').owlCarousel({
  items: 4,
  loop: true,
  dots: false,
  nav: true,
});

$('.menu-toggle').on('click', function(e){
  e.preventDefault();

  $('.dropdown-menu').toggleClass('dropdown-menu--visible');
});
