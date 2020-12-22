import $ from '../../node_modules/jquery';
global.$ = $;
global.jQuery = $;
jQuery = $;
import WOW from '../../node_modules/wow.js';

$("document").ready(function () {

    var wow = new WOW();

    wow.init();

    setElementsByScroll($(window).scrollTop());
 
    $(window).scroll(function(event){
        setElementsByScroll($(this).scrollTop());
    });

    $(".scroll-to").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});



function setElementsByScroll(current){
            
    if (current >= $(window).height()*0.13+85){
        $('.navigation').addClass('navigation--fix-top');
    }
    else {
        $('.navigation').removeClass('navigation--fix-top');
    }


   if($(window).width() > 992)
    {
        if (current > 800){
            $('#social-menu').addClass('navigation__social--fix-top');
            $('#social-menu').find('.navigation__social__icon').addClass('animated bounceIn');
            $('#social-menu').attr('style','');
            $('#social-menu').removeClass('wow fadeInDown');
        }
        else {
            $('#social-menu').removeClass('navigation__social--fix-top');
            $('#social-menu').find('.navigation__social__icon').removeClass('animated bounceIn');
        }

        if (current > 1100){           
            $('#content-menu').addClass('navigation__content--fix-top');
            $('#content-menu').attr('style','');
            $('.navigation__content__icon').addClass('animated bounceIn'); 
            $('#content-menu').removeClass('wow fadeInUp');    
        }
        else {
            $('#content-menu').removeClass('navigation__content--fix-top');
            $('.navigation__content__icon').removeClass('animated bounceIn');
        }
    }else{
        $('#social-menu').removeClass('navigation__social--fix-top');
        $('#content-menu').removeClass('navigation__content--fix-top');
    } 
}

(function($) {
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
})(jQuery);