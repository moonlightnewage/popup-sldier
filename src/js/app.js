import sayHello from './lib/sayHello.js';
sayHello();

import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;

//import Tabs from './tabs';
import Tab from './Tab.js';
import sliders from './slider.js';
import modal from './modal.js';

$(document).ready(function() {
//    Tabs();
    new Tab({
        link: '.js-tab-link',
        content: '.js-tab-content'
    });
    modal({
        modal: '.js-popup',
        trigger: '.js-popup-open'
    })
    sliders();
});


