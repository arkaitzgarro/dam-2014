$(document).ready(function(){
    'use strict';

    var onSlideBefore = function($slideElement, oldIndex, newIndex) {
        console.log($slideElement, oldIndex, newIndex);
    };

    var onSlideAfter = function($slideElement, oldIndex, newIndex) {
        console.log($slideElement, oldIndex, newIndex);
    };

    $(".fancybox").fancybox();
    var $slideshow = $('#slideshow').bxSlider({
        'mode': 'fade',
        'controls' : false,
        'pager' : false,
        'onSlideBefore' : onSlideBefore,
        'onSlideAfter' : onSlideAfter
    });

    $(document).on('click', '.prev-slide', function(e) {
        e.preventDefault();

        var target = this.dataset.target;
        var $target = $(this).data('target');

        $slideshow.goToPrevSlide();
    });

    $(document).on('click', '.next-slide', function(e) {
        e.preventDefault();

        $slideshow.goToNextSlide();
    });
});