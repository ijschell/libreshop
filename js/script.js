function scrollIndicator() {
    $('html, body').animate({
        scrollTop: $("section").offset().top
    }, 1000);
}

$(document).on('mouseover', 'header .wrapper .toolbar a', function(){
  $(this).addClass('bounce');
})
