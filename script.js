$('.slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

    $('.flexx').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: '<img class="left8" src="images/left-arrow.svg" alt="foto">',
      prevArrow: '<img class="right8" src="images/right-arrow.svg" alt="foto">',
    });

  $('.slider1').slick({
    slidesToShow: 5,
    nextArrow: '<img class="left7" src="images/left-arrow.svg" alt="">',
    prevArrow: '<img class="right7" src="images/right-arrow.svg" alt="">',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });