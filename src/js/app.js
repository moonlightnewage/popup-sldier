import sayHello from './lib/sayHello.js';
sayHello();

import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;

import Tabs from './tabs';

$(document).ready(function() {
    Tabs();
});


