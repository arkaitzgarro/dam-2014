$(document).ready(function() {
    'use strict';

    var $modules = $('div.module').hide();

    var $nav = $('<ul/>')
        .addClass('tabs')
        .insertBefore($modules.eq(0));

    $modules.each(function() {
        var $module = $(this);
        var $title = $module.find('h2');

        var $tab = $('<li>' + $title.text() + '</li>')
            .appendTo($nav)
            .data('module', $module);
    });

    $nav.on('click', 'li', function(e) {
        var $this = $(this);
        $this.addClass('current').siblings().removeClass('current');
        $this.data('module').show().siblings('.module').hide();
    });

    $modules.eq(0).show();
    $nav.find('li:first').addClass('current');
});