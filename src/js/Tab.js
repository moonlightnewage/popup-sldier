export default class Tab {
    constructor(options) {
        this.link = document.querySelectorAll(options.link);
        this.content = document.querySelectorAll(options.content);
        this.tab = [this.link, this.content];
        
        this.init();
        this._onClick();
    }
    
    init() {
        this._addData(this.tab);
        this._makeActive(this.tab);
    }
    
    _addData(list) {
        for (let i = 0; i < list.length; i++) {
            $(list[i]).each(function(n) {
                $(this).attr('data-target', n); 
            });
        }
    }
    
    _makeActive(list) {
        for (let i = 0; i < list.length; i++) {
            $(list[i][0]).addClass('is-active');
        }
    }
    
    _onClick() {
        let link = $(this.link);
        let content = $(this.content);
        
        link.on('click', function() {
            $(this)
                .addClass('is-active')
                .siblings()
                .removeClass('is-active');
            
            let target = $(this).data('target');
            
            $(content[target])
                .addClass('is-active')
                .siblings()
                .removeClass('is-active');
        });
    }
}