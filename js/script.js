function scrollIndicator() {
    $('html, body').animate({
        scrollTop: $("section.top").offset().top
    }, 1000);
}

$(document).on('mouseover', 'header .wrapper .toolbar a', function(){
  $(this).addClass('bounce');
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
  })
})
