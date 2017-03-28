export default (props) => {

    let modal = $(props.modal);
    let trigger = $(props.trigger);
    let parent = trigger.closest('[data-target]');
    
    $(parent).each(function() {
        let triggers = $(this).find(trigger);
        
        for (let i = 0; i < triggers.length; i++) {
            $(triggers[i]).attr('data-slide', i);
        }
    });
    
    trigger.on('click', function(e) {
        let current = $(this).closest('[data-target]').data('target');
        
        modal.parent().show();
        $(modal[current]).addClass('is-active');
    });
    
    $('.js-popup-close, .js-popup-overlay').click(function(e) {
        e.preventDefault();
        
        $('.popup').hide();
        $('.js-popup').removeClass('is-active');
    });
    
}