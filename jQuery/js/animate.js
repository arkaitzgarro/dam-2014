$(function(){
    'use strict';

    var $boxes = $('.box');
    var $width = $(document).width();

    setInterval(function(){
        $boxes.css({
            'width'  : '50px',
            'height' : '50px',
            'color'  : 'yellow',
            'font-size' : '18px',
            'background-color' : 'blue',
            '-webkit-transform' : 'translateX(' + ($width - 100) +'px)',
            '-webkit-transition-property' : 'all',
            '-webkit-transition-duration' : '800ms'
        });
    }, 1000);

});