$(function(){
    $('.parallax').parallax();

    $('.button-collapse').sideNav({
        edge: 'right',
        closeOnClick: true
    });

     $(window).on('scroll', function(){
        if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
            $('nav').removeClass('color-added').addClass('color-removed').removeClass('z-depth-0');
            $('.brand-logo').removeClass('hide');
        } else {
            $('nav').addClass('color-added').removeClass('color-removed').addClass('z-depth-0');
            $('.brand-logo').addClass('hide');
        }
    });

    $('.slider').slider();
});