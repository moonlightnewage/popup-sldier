import "owl.carousel";

export default () => {
    
    // adding 'data-target' to elements
    createDefaults({
        link: '.js-tab-link',
        content: '.js-tab-content',
        popup: '.js-popup'
    });
    
    // creating first slider
    var sliderFirst = $('.js-tab-content[data-target="1"] .js-tab-slider').owlCarousel({
        items: 2,
        margin: 20,
        nav: true,
        navText: '',
        slideBy: 2
    });
    
    // navigation for first slider
    navigate({
        target: 1,
        control: '.js-control-prev',
        slider: sliderFirst
    });

    navigate({
        target: 1,
        control: '.js-control-next',
        slider: sliderFirst
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
        var sliderSecond = $('.js-tab-content[data-target="2"] .js-tab-slider').owlCarousel({
            items: 2,
            margin: 20,
            nav: true,
            navText: '',
            slideBy: 2
        });
        
        // navigation for second slider
        navigate({
            target: 2,
            control: '.js-control-prev',
            slider: sliderSecond
        });
        
        navigate({
            target: 2,
            control: '.js-control-next',
            slider: sliderSecond
        });

    });
    
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
    
    function navigate(props) {
        $('.js-tab-content[data-target="' + props.target + '"]').find(props.control).click(function(e) {
            if (props.control == '.js-control-prev') {
                props.slider.trigger("prev.owl.carousel");
            }
            else {
                props.slider.trigger("next.owl.carousel")
            }
        })
    }
    
    
    // popup
    
    $('.js-tab-content[data-target="1"] .js-popup-open').attr("data-target", 1);
    $('.js-tab-content[data-target="2"] .js-popup-open').attr("data-target", 2);
    
    $('.js-popup-open').click(function(e) {
        e.preventDefault();
        
        let popup = $('.js-popup[data-target="' + $(this).data('target') + '"]');
        
        popup.show();
        $('.popup-overlay').addClass('is-active');
        
        var popupSliderFirst = $('.js-popup-slider').owlCarousel({
            items: 1,
            nav: true,
            navText: '',
            slideBy: '1'
        });
        
        navigate({
            target: 1,
            control: '.js-control-prev',
            slider: popupSliderFirst
        });
        
        navigate({
            target: 1,
            control: '.js-control-next',
            slider: popupSliderFirst
        });
        
        
        var popupSliderSecond = $('.js-popup-slider').owlCarousel({
            items: 1,
            nav: true,
            navText: '',
            slideBy: '1'
        });
        
        navigate({
            target: 2,
            control: '.js-control-prev',
            slider: popupSliderSecond
        });
        
        navigate({
            target: 2,
            control: '.js-control-next',
            slider: popupSliderSecond
        });
        
        $('.js-popup[data-target="2"] .js-control-prev').click(function(e) {
            popupSliderSecond.trigger("prev.owl.carousel");
        });
        
        $('.js-popup[data-target="2"] .js-control-next').click(function(e) {
            popupSliderSecond.trigger("next.owl.carousel");
        });
        
    });
    
    $('.js-popup-close').click(function(e) {
        e.preventDefault();
        
        $('.js-popup').hide();
        
        $('.popup-overlay').removeClass('is-active');
        
    });
    
}