import "slick-carousel";

export default () => {
    
    $('.js-tab-content[data-target="0"] .js-tab-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        infinite: false,
        prevArrow: $('.js-tab-content[data-target="0"] .js-control-prev'),
        nextArrow: $('.js-tab-content[data-target="0"] .js-control-next')
    });
    
    let initTabSliderBtn = $('.js-tab-link');
    let initModalSliderBtn = $('.js-popup-open');
    let reinitModalSliderBtn = $('.js-popup-close, .js-popup-overlay');
    
    initTabSliderBtn.on('click.init', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        $('.js-tab-content[data-target="1"] .js-tab-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
            infinite: false,
            prevArrow: $('.js-tab-content[data-target="1"] .js-control-prev'),
            nextArrow: $('.js-tab-content[data-target="1"] .js-control-next')
        });
        
        initTabSliderBtn.off('.init');
    });
    
    createPages('.js-popup-slider');
    
    let popupSlider;
    
    initModalSliderBtn.on('click', function(e) {
        e.preventDefault();
        
        let currentSlide = +$(this).data('slide');
        
        popupSlider = $('.js-popup.is-active').find('.js-popup-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: currentSlide,
            dots: false,
            infinite: false,
            prevArrow: $('.js-popup.is-active').find('.js-control-prev'),
            nextArrow: $('.js-popup.is-active').find('.js-control-next')
        });

    });
    
    reinitModalSliderBtn.on('click', function(e) {
        e.preventDefault();
        
        popupSlider.slick('unslick');
    });
    
    
    function createPages(slider) {
        let sliders = document.querySelectorAll(slider);
        
        let dom = '<span class="js-current-slide"></span> / <span class="js-max-slide"></span>';
        
        for(let i = 0; i < sliders.length; i++) {
            $(sliders[i]).children().find('.js-slide-pages').append(dom);
        }
    }
    
}