function scrollIndicator() {
    $('html, body').animate({
        scrollTop: $("section.top").offset().top
    }, 1000);
}

$(document).on('mouseover', 'header .wrapper .toolbar a', function(){
  $(this).addClass('bounce');
})

$(document).on('click', '.btn-more', function(e){
  e.preventDefault();
  $(this).next('.more-information').addClass('active');
  setTimeout(function(){
    $('html, body').animate({
        scrollTop: $('.btn-more').offset().top
    }, 1000);
  }, 1000);
})

$(document).ready(function(){
  var charTop = $(".chars").offset().top - 200;
  $(window).scroll(function(){
    console.log(charTop + ' - ' + $(window).scrollTop());
    if($(window).scrollTop() > charTop){
      $('section.chars .cat').addClass('fadeInUp');
      $('section.chars .car').addClass('fadeInLeft');
      $('section.chars .cel').addClass('fadeInRight');
    }
  });

  $('.slick-slider').slick({
    infinite: true,
    arrows: false,
    dots: true
  });

  $('.chars-section .slick-dots li:nth-child(1) button').text('Fácil');
  $('.chars-section .slick-dots li:nth-child(2) button').text('Rápido');
  $('.chars-section .slick-dots li:nth-child(3) button').text('Seguro');

  stepByStep();
})

function stepByStep(){
  $(document).on('click', '.stepbystep .next-step', function(e){
    e.preventDefault();
    console.log($(this).parents('.steps'));
    var step = $(this).parents('.steps')[0].classList[0];
    switch(step){
      case 'step1':
        $('.stepbystep .steps').css('left', 'calc(-100% / 5)');
        $('.stepbystep .step1').removeClass('active');
        $('.stepbystep .step1').next().addClass('active');
      break;
      case 'step2':
        $('.stepbystep .steps').css('left', 'calc((-100% / 5) * 2)');
        $('.stepbystep .step2').removeClass('active');
        $('.stepbystep .step2').next().addClass('active');
      break;
    }
  })
  $(document).on('click', '.stepbystep .next-step-yes', function(e){
    e.preventDefault();
    $('.stepbystep .steps').css('left', 'calc((-100% / 5) * 3)');
    $('.stepbystep .step2').removeClass('active');
    $('.stepbystep .step4').addClass('active');
  });
  $(document).on('click', '.stepbystep .btn-go-form', function(e){
    e.preventDefault();
    var option = $(this).attr('data-option');
    if(option == 'web'){
      $('form input[type="hidden"]').val('web');
    }else {
      $('form input[type="hidden"]').val('noweb');
    }
    $('.stepbystep .steps').css('left', 'calc((-100% / 5) * 4)');
    $('.stepbystep .steps').removeClass('active');
    $('.stepbystep .step5').addClass('active');
  })
}
