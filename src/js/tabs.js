import "slick-carousel";
//import "owl.carousel";

export default () => {
    
    // adding 'data-target' to elements
    createDefaults({
        link: '.js-tab-link',
        content: '.js-tab-content',
        popup: '.js-popup'
    });
    
    // creating first slider
    var sliderFirst = $('.js-tab-content[data-target="1"] .js-tab-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        infinite: false,
        prevArrow: $('.js-tab-content[data-target="1"] .js-control-prev'),
        nextArrow: $('.js-tab-content[data-target="1"] .js-control-next')
    });
    

    // clicker for tab link
    $('.js-tab-link').click(function(e) {
        e.preventDefault();
        
        $(this)
            .addClass('is-active')
            .siblings()
            .removeClass('is-active');
        
        let current = $('.js-tab-content[data-target="'+ $(this).data('target') +'"]');
        
        $(current)
            .addClass('is-active')
            .siblings()
            .removeClass('is-active');
        
        // creating second slider by click
        
        var sliderSecond = $('.js-tab-content[data-target="2"] .js-tab-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
            infinite: false,
            prevArrow: $('.js-tab-content[data-target="2"] .js-control-prev'),
            nextArrow: $('.js-tab-content[data-target="2"] .js-control-next')
        });

    });
    
    
    // popup
    $('.js-tab-content').each(function(n) {

        let buttons = $(this).find('.js-popup-open');
        buttons.attr('data-target', n+1);

        for (let i = 0; i < buttons.length; i++) {
            $(buttons[i]).attr('data-slide', i);
        }
    });
    
    let popupSlider;
    
    $('.js-popup-open').click(function(e) {
        e.preventDefault();
        
        let popup = $('.js-popup[data-target="' + $(this).data('target') + '"]');
        
        popup.show();
        $('.js-popup-overlay').addClass('is-active');
        
        let currentSlide = +$(this).data('slide');
        let maxSlide = $(this).closest('.js-tab-slider').find('.js-tab-slide').length;
        console.log(maxSlide);
        
        count({
            element: '.js-slide-pages',
            current: currentSlide + 1,
            max: maxSlide
        });
        
        popupSlider = $(popup).find('.js-popup-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: currentSlide,
            dots: false,
            infinite: false,
            prevArrow: $(popup).find('.js-control-prev'),
            nextArrow: $(popup).find('.js-control-next'),
        });
  
    });
    
    $('.js-popup-close, .js-popup-overlay').click(function(e) {
        e.preventDefault();
        
        $('.js-popup').hide();
        
        $('.js-popup-overlay').removeClass('is-active');
        
        popupSlider.slick('unslick');
        
    });
    
    //make structure like createDom functions, actionfunctions etc.
    function count(props) {
        $(props.element).prepend('<span class="js-current-slide"></span> /');
        $(props.element).append('<span class="js-max-slide"> </span>');
        
        $('.js-current-slide').html("");
        $('.js-max-slide').html("");
        
        $('.js-current-slide').html(props.current);
        $('.js-max-slide').html(props.max);
        
    }

    
    function createDefaults(props) {
        for (var key in props) {
            let n = 1;
            
            $(props[key]).each(function(){
                $(this).attr('data-target', n++);
                
                if ($(this).data('target') == 1) {
                    $(this).addClass('is-active');
                }
            });
        }
    }
}