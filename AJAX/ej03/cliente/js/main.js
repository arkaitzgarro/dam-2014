$(function() {
    'use strict';

    var $login = $('#login');
    var $res = $('#disponibilidad');

    $('#comprobar').on('click', function(e) {
        e.preventDefault();

        if($login.val().trim().length > 0) {
            $.ajax({
                url : '../servidor/compruebaDisponibilidadJSON.php',
                type : 'POST',
                data : { login : $login.val() },
                dataType : 'json',
                cache : false,
                success : mostrarResultado,
                error : mostrarError
            });
        } else {
            alert('Introduce un nombre de usuario');
        }
    });

    var mostrarResultado = function(data) {
        if(data.disponible === 'si') {
            $res.html('<p>El nombre de usuario está disponible.</p>');
        } else {
            $res.html('<p>El nombre de usuario NO está disponible.</p>');
        }
    };

    var mostrarError = function(jqXHR, status, error) {
        console.log(error);
    };
});