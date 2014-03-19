$(document).ready(function() {
    'use strict';

    var $modules = $('div.module').hide();
    var $nav = $('<ul/>', {
        'id' : 'myTabs'
    }).addClass('tabs');

    var lis = [];
    $modules.each(function() {
        var $module = $(this);
        var $title = $module.find('h2').first().text();

        var $li = $('<li/>', {
            'text' : $title
        });
        $li.data('target', $module);

        lis.push($li.get(0));
    });

    $nav.append(lis).insertBefore($modules.eq(0));

    $(document).on('click', '.tabs li', function(e) {
        var $li = $(this);

        $li.addClass('current').siblings('.current').removeClass('current');
        $li.data('target').show().siblings('.module').hide();
    });

    $modules.eq(0).show();
    $nav.find('li').filter(':first').addClass('current');
});