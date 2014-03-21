$(function() {
    'use strict';

    var $contenidos = $('#contenidos');
    var $estado     = $('#estado');
    var $estados    = $('#estados');
    var $cabeceras  = $('#cabeceras');
    var $codigo     = $('#codigo');
    var $recurso    = $('#recurso');
    var estadosPosibles = ['No inicializado', 'Cargando', 'Cargado', 'Interactivo', 'Completado'];
    var tiempoInicial = 0;

    $recurso.val(window.location);

    var cargarContenido = function(e) {
        if($recurso.val().trim().length > 0) {
            borrarContenido();

            tiempoInicial = new Date();

            $.ajax({
                url : $recurso.val(),
                cache : false,
                xhr : function() {
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function() {
                        var tiempoFinal = new Date();
                        var milisegundos = tiempoFinal - tiempoInicial;

                        $estados.html($estados.html() + "[" + milisegundos + " mseg.] " + estadosPosibles[xhr.readyState] + "<br/>");
                    };

                    return xhr;
                },
                success : muestraContenido,
                error : muestraError
            });
        } else {
            alert('Introduce una URL');
        }
    };

    var muestraContenido = function(data, textStatus, jqXHR) {
        $contenidos.text(data);
        $cabeceras.text(jqXHR.getAllResponseHeaders());
        $codigo.html(jqXHR.status + "<br/>" + jqXHR.statusText);
    };

    var muestraError = function(jqXHR, textStatus, errorThrown) {
        $codigo.html(jqXHR.status + "<br/>" + jqXHR.statusText);
        console.log('Se ha producido un error al procesar la petición.');
    };

    var borrarContenido = function() {
        $contenidos.html('');
        $estados.html('');
        $cabeceras.html('');
        $codigo.html('');
    };

    $('#enviar').on('click', cargarContenido);
});