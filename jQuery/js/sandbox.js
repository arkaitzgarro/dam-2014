$(function(){
    'use strict';

    /**
     * SELECCIONES
     */

    // Seleccionar todos los elementos div que poseen la clase "module".
    var $divs = $('div.module');
    console.log($divs);

    // Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista desordenada #myList.
    var $li = $('#myList li').eq(2);
    console.log($li[0]);
    $li = $('#myList').find('li').eq(2);
    console.log($li[0]);
    $li = $('#myList li:nth-child(3)');
    console.log($li[0]);
    $li = $('#myListItem');
    console.log($li[0]);

    // Seleccionar el elemento label del elemento input utilizando un selector de atributo.
    var $input = $('[name="q"]');
    var $label = $input.closest('form')
                       .find('label[for="' + $input.attr('name') + '"]');
    console.log($label);

    // Averiguar cuantos elementos en la página están ocultos
    var $ocultos = $(':hidden');

    // Averiguar cuantas imágenes en la página poseen el atributo alt.
    var $imgs = $('img[alt]');

    // Seleccionar todas las filas impares del cuerpo de la tabla.
    // var $filas = $('tbody tr:odd').css('background-color', 'gray');

    /**
     * RECORRER EL DOM
     */

    // Seleccionar todas las imágenes en la página; registrar en la consola el atributo alt de cada imagen.
    $imgs.each(function(idx, el) {
        console.log($(el).attr('alt'));
    });

    $imgs.each(function(idx, el) {
        console.log(el.alt);
    });

    $imgs.each(function() {
        console.log(this.alt);
    });

    for (var i = $imgs.length - 1; i >= 0; i--) {
        console.log($imgs[i].alt);
    }

    //Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.
    $input.closest('form').addClass('formulario');

    // Seleccionar el ítem que posee la clase "current" dentro de la lista #myList y remover dicha clase en el elemento; luego añadir la clase "current" al siguiente ítem de la lista.
    $('#myList li.current').removeClass('current').next().addClass('current');

    // Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.
    var $submit = $('#specials select').closest('form').find('input[type="submit"]');

    // Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase "current" al mismo y luego añadir la clase "disabled" a los elementos hermanos.
    $('#slideshow li:first-child').addClass('current').siblings().addClass('disabled');

    /**
     * MANIPULACION
     */

    // Añadir 5 nuevos ítems al final de la lista desordenada #myList.
    var start,
        end;

    start = new Date();
    for (i = 5 - 1; i >= 0; i--) {
        $('<li>List item ' + i + '</li>').appendTo($('#myList'));
    }
    end = new Date();
    console.log('appendTo dentro del for: ' + (end-start));

    start = new Date();
    var $lis = [];
    for (i = 5 - 1; i >= 0; i--) {
        $lis.push('<li>List item ' + i + '</li>');
    }
    var $myList = $('#myList');
    $myList.append($lis.join(''));
    end = new Date();
    console.log('append fuera del for: ' + (end-start));

    // Remover los ítems impares de la lista.
    $('#myList li:odd').remove();

    // Añadir otro elemento h2 y otro párrafo al último div.module.
    $('div.module')
        .last()
        .append('<h2>new heading</h2>')
        .append('<p>new paragraph</p>');

    // Añadir otra opción al elemento select; darle a la opción añadida el valor "Wednesday".
    $('select[name="day"]').append('<option value="wednesday">Wednesday</option>');

    // Añadir un nuevo div.module a la página después del último; luego añadir una copia de una de las imágenes existentes dentro del nuevo div.
    var $img = $('img').filter(':first');
    var $newDiv = $('<div class="module"/>');

    $newDiv.append($img.clone()).insertAfter('div.module').filter(':last');
});