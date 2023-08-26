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
    nextArrow: '<img class="leftgray" src="img/leftgray.png" alt="left">',
    prevArrow: '<img class="rightgray" src="img/rightgray.png" alt="right">',
  });


  $('.slider1').slick({
    slidesToShow: 5,
    nextArrow: '<img class="leftgray2" src="img/leftgray.png" alt="left">',
    prevArrow: '<img class="rightgray2" src="img/rightgray.png" alt="right">',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });